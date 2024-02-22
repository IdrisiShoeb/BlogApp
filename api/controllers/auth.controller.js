import {errorHandler} from "../utils/error.js"
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"


export const signup = async (req,res,next)=>{
    const {username , email , password} = req.body

    try {
        if(!username || !email || !password ||username==='' ||email==='' || password===''){
            // return res.status(400).json({
            //     message: "All fields are Required !"
            // })
            next(errorHandler(400 ,"All fields are Required !"))
        }

        const hashedPass =  bcryptjs.hashSync(password, 10)
    
        const user = await User.create({
            username,
            email,
            password: hashedPass,
        })
    
        res.status(200).json({
            success: true,
            message: "SignUp Successful!!!"
        })
    } catch (error) {
        // res.status(500).json({
        //     message: error.message
        // })

        next(error)
    }
    
    
}


