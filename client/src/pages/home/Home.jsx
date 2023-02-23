import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import SideBar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}
