import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"String",
        required:true
    }

})
const userModel=mongoose.models.user||mongoose.model('user',userSchema)
export default userModel
