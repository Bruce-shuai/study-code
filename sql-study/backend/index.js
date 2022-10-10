import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express(); 

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "test"
})

// If there is a auth problem 

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // 返回的全是json数据
  res.json("Hello")
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover, req.body.price];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successful");
  })
})

app.delete("/book/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully.")
  })
})

app.put("/book/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [req.body.title, req.body.desc, req.body.cover, req.body.price];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updates successfully.")
  })
})

app.listen(8800, () => {
  console.log('Connected to backend!3');
});