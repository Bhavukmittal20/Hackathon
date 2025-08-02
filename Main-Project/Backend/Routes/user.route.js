import express from "express"
import  { getProfile, loginUser,registerUser,logoutUser } from "../controller/user.controller.js"
import verifyToken from "../middlewares/authUser.middleware.js"
const userRouter=express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get-profile',verifyToken,getProfile)
userRouter.get('/logout',logoutUser)
export default userRouter