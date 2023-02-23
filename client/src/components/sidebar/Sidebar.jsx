import { BookOnlineOutlined, Chat, Event,  GroupAddOutlined, HelpCenterOutlined, PlayArrowOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material"
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarListIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarListIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayArrowOutlined className="sidebarListIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <GroupAddOutlined className="sidebarListIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <BookOnlineOutlined className="sidebarListIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpCenterOutlined className="sidebarListIcon" />
            <span className="sidebarListItemText">Questions ?</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarListIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarListIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarListIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFirendImg" src="/assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Kamate</span>
          </li>


        </ul>
      </div>
    </div>
  )
}
