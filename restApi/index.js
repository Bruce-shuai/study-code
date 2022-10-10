const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  userNewUrlPaser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, () => {
  console.log('Connected to MongoDB');
})

// 中间件
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// 路由也变成中间件了
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(8800, () => {
  console.log("Backend server is running!");
})