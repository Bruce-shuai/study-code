import React from 'react'
import "./post.css";


const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src="https://cdn.pixabay.com/photo/2022/08/13/08/33/forest-7383165_1280.jpg" alt="post-cover" />
      <div className="postInfo">
        <div className="posCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className='postTitle'>
          Lorem ipsum dolor sit amet c
        </span>
        <hr />
        <span className="postDate">1 hour Date</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique recusandae unde, voluptatibus eum, nostrum rerum doloribus iusto architecto, accusamus voluptas aliquam voluptatem. Dolorem distinctio aut optio dignissimos consequuntur, praesentium fugiat.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tenetur laboriosam cum omnis ex, enim voluptatibus alias velit, voluptas sequi in odit illo consequatur optio aut impedit. Officia, unde dolore!
      </p>
    </div>
  )
}

export default Post