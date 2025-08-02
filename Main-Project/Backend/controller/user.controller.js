import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'
const registerUser=async (req,res)=>{
    try{
    const{name,email,password}=req.body
    if(!name||!email||!password){
        return res.json({success:false,message:"Missing details"})
    }
    if(!validator.isEmail(email)) return res.json({success:false,message:'Invalid Email'})
      if(!validator.isStrongPassword(password)) return res.json({success:false,message:'Weak password'})
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const userData={name,email,password:hashedPassword}
    const newUser=new userModel(userData)
    await newUser.save()
    res.json({success:true})
  } catch(e){
    res.json({success:'false',message:'An error occued'})
  }
}
const loginUser=async (req,res)=>{
  console.log("Login route hit");
    const { email, password } = req.body;
    const user =await userModel.findOne({email})
    if (!user) return res.status(400).json({success:false, message: "User not found" });
  
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({success:false, message: "Invalid password" });
  
    const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie('token', token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', // only send over HTTPS in production
        secure:false,
        sameSite: 'strict',
        maxAge: 60 * 60 * 1000 // 1 hour
      });
     console.log("Token cookie set");

    res.json({ success: true, token });
}
export {registerUser,loginUser}