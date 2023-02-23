import { useEffect, useState } from "react"
import Share from "../share/Share"
import "./feed.css"
import Post from "../post/Post"
import axios from  "axios"

export default function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/63dbfdbd13cebb2fb256ede3")
     setPosts(res.data)
    }
    fetchPost()
  }, [username])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return (
            <Post
              key={p._id} post={p} />
          )
        })}
        
      </div>
    </div>
  )
}
