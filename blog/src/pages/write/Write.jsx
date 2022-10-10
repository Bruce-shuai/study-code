import React from 'react'
import './write.css';


const Write = () => {
  return (
    <div className='write'>
      <img 
        className='writeImg'
        src="https://cdn.pixabay.com/photo/2021/05/17/12/42/lake-6260668_1280.png" 
        alt="write-cover" 
      />
      <form action="" className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'>

          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write