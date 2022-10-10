import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../style.css';
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try { 
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data)
      } catch(err) {
        console.log(err);
      }
    }
    fetchAllBooks();
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/book/${id}`);
      // 重新刷新一次页面
      window.location.reload();

    } catch(err) {

    }
  }

  return (
    <div className={styles.App}>
      <h1>HeYang Book Shop</h1>
      <div className="books">
        {books.map(book => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <span>{book.price}</span>
            <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
            <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button><Link to="/add">Add new book</Link></button>
    </div>
  )
}

export default Books