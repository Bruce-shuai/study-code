import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className="headerImg" src="https://cdn.pixabay.com/photo/2022/09/25/09/58/houses-7477950_1280.jpg" alt="headerImg" />
    </div>
  )
}

export default Header