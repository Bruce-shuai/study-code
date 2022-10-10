import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    title: ""
  })

  const navigate = useNavigate();  // 导航跳转
  const location = useLocation();
  const bookId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    // 这里的内容有点意思
    setBook(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async e => {
    e.preventDefault();   // 避免点击按钮刷新页面
    try {
      await axios.put(`http://localhost:8800/book/${bookId}`, book)
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='form'>
      <h1>Update the book</h1>
      <input type="text" placeholder='title' onChange={handleChange}  name="title" />
      <input type="text" placeholder='desc' onChange={handleChange} name="desc" />
      <input type="number" placeholder='price' onChange={handleChange} name="price" />
      <input type="text" placeholder='cover' onChange={handleChange} name="cover" />
      <button className='formbutton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update