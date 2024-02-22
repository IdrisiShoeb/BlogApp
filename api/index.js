import express from "express"
import mongoose from "mongoose"

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app = express()

app.use(express.json())
app.use("/api/users" , userRoutes)
app.use("/api/auth" , authRoutes)

mongoose.connect('mongodb+srv://test:test@cluster0.cpoznak.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DB Connected")
}).catch((err)=> console.log(err))





app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    res.status(statusCode).json({
        succcess: false,
        statusCode,
        message
    })

})