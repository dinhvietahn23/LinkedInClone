import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'

const app = express()
const PORT = process.env.PORT||5000
const URL_MONGO = process.env.URL_MONGO

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())
dotenv.config()

app.use("/api/auths", authRoute);
app.use("/api/users", userRoute)

mongoose.connect(URL_MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to mongoDB")
        app.listen(PORT,()=>{
            console.log(`Server is runnig on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log("Error:", error)
    })