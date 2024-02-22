import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose.connect('mongodb+srv://test:test@cluster0.cpoznak.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("DB Connected")
}).catch((err)=> console.log(err))



app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})