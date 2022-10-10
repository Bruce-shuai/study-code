import React from 'react'
import './topBar.css'
const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-qq"></i>
        <i className="topIcon fa-brands fa-weixin"></i>
        <i className="topIcon fa-brands fa-github"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src="https://avatars.githubusercontent.com/u/63891989?v=4" alt="avatar" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar