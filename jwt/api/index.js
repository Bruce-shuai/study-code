import express from 'express';

const app = express();

const users = [
  {
    id: "1",
    username: "John",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "Jane",
    password: "Jane0908",
    isAdmin: true,
  }
]

app.post()

app.listen(5001, () => console.log("Backend server is running"))