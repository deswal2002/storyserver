require("dotenv").config()
const express = require('express')
const app = express()
const {mongoose}=require('mongoose')
const auth= require("./routes/auth")
const story = require("./routes/story")
const bookmark = require("./routes/bookmark")
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("db is connected")
}).catch((error)=>{
  console.log(error)
})

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use('/api/auth',auth);
app.use('/api/story',story);
app.use('/api/bookmark',bookmark)

app.listen(PORT, () => {
  console.log(`Example app listening on port http://${HOST}:${PORT}`)
})