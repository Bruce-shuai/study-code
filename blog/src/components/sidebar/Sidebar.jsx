import React from 'react'
import "./sidebar.css";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2022/06/15/13/39/man-7263965_1280.png" alt="about-me-cover" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptatem delectus minima distinctio temporibus itaque. Omnis cum vel voluptates amet necessitatibus non, dolorum ipsum veniam qui ex, voluptas quasi assumenda!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CAT EGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-qq"></i>
          <i className="sidebarIcon fa-brands fa-weixin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar