import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    useranme: {
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
    },   
},{timestamps:true}
)


const User = mongoose.model('User', userSchema)

export default User