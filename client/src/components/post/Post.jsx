import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { format } from "timeago.js"
import {Link} from "react-router-dom"


export default function Post({ post }) {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser()

    }, [post.userId])


    return (
    <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={PF + user.profilePicture || PF + "person/noavatar.png"} alt="" className="postProfilImg" />
                        </Link>
                      <span className="postUsername">{ user.username }</span>
                      <span className="postDate">{ format(post.createdAt) }</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert />
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{ post?.desc }</span>
                  <img src={PF+post.img} alt="" className="postImg" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className="likeIcon" src={`${PF}like.png`} onClick={handleLike} alt="" />
                      <img className="likeIcon" src={`${PF}heart.png`} onClick={handleLike} alt="" />
                      <span className="postLikeCounter">{like} people liked it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post.comment} Comments</span>
                  </div>
              </div>
      </div>
    </div>
  )
}
