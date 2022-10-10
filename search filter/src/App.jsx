import React, { useEffect, useState } from 'react'
import styles from './app.module.css';
import Table from './Table';
import axios from 'axios';


const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('xxx');
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5001?q=${query}`);
      if (query === '') {
        setData([])
      } else {
        setData(res.data)
      }
    }
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query])
  // 对 query 有一个防抖才行

  console.log('y')
  return (
    <div className={styles.app}>
      <input type="text" placeholder='Search...' className={styles.search} onChange={e => setQuery(e.target.value)}/>
      {/* <ul className={styles.list}>
        {
          // 这里的filter是关键
          Users
          .filter(user => user.first_name.toLowerCase().includes(query))
          .map(user => (
            <li className={styles.listItem} key={user.id}>
              {user.first_name}
            </li>
          ))
        }
      </ul> */}
      <Table data={data}/>
    </div>
  )
}

export default App