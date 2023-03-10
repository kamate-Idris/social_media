import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./topbar.css"
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">KamateSocial</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search for friends, pots or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home page</span>
            <span className="topbarLink">Time line</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" className="topbarImg" alt="" />
        </div>
      </div>
    </div>
  )
}
