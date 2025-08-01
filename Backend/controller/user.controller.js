import userModel from "../models/user.model.js";
const registerUser=async (req,res)=>{
    const{name,email}=req.body
    if(!name||!email){
        return res.json({success:false,message:"Missing details"})
    }
    const userData={name,email}
    const newUser=new userModel(userData)
    await newUser.save()
    res.json({success:true})
}
export default registerUser