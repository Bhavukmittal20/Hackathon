import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js"
import bodyParser from "body-parser"
import userRouter from "./Routes/user.route.js"
const app = express()
connectDB()
app.use(express.json())
const port = 3000
app.use('/api/user',userRouter)
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})