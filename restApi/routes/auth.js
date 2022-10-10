const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.get("/register", async (req, res) => {
  const user = new User({
    username: "join",
    email: '284970670@qq.com',
    password: '123456'
  })

  await user.save();
  res.send("ok")
})


module.exports = router