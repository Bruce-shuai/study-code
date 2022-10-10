import express from "express";
import cors from "cors";
import { Users } from "./users.js"

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const {q} = req.query

  const keys = ["first_name", "last_name", "email",]
  const search = data => {
    return data.filter(item => 
      keys.some(key => item[key].toLowerCase().includes(q))
    )
  }

  res.json(search(Users).splice(0, 10))
})

app.listen(5001, () => console.log("API is working"));