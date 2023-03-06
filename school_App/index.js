import mongoose, { connect } from "mongoose";
import express from "express";
import dotenv from 'dotenv'
import uniRouter from "./router/university.js";
import studentRouter from "./router/student.js";
const uri = "mongodb+srv://node01:node01@cluster0.2drqhim.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
const app = express()
dotenv.config()

app.use(express.json())
app.use('/university', uniRouter)
app.use('/student', studentRouter)


app.listen(process.env.PORT, () => {
    console.log('server is up ...')
})

