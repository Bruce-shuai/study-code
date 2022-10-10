import React from 'react'
import "./singlepost.css"


const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://cdn.pixabay.com/photo/2022/08/23/11/40/fox-7405603_1280.png" alt="blog-cover" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Safak</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorem temporibus voluptates at. Sit nostrum maiores corporis nesciunt ducimus fugiat tempore ratione deserunt numquam animi illo dignissimos, dolores praesentium dolor?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ipsa hic earum ab tempore repellendus culpa minima id numquam a nisi dolore? Modi, ut! Consectetur sit expedita quaerat maiores sed.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias accusantium dolore qui provident. Eius omnis sequi quod quae dolorem maiores deserunt itaque voluptate. Minima iusto beatae dignissimos laborum quam debitis.
        </p>
      </div>
    </div>
  )
}

export default SinglePost