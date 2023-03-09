import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path';
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
dotenv.config()
const app = express()


app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})


app.get('/signup', (req, res) => {
    res.sendFile(path.resolve('./signup.html'))
})


app.get('/signin',(req,res)=>{
    res.sendFile(path.resolve('./signin.html'))
})











app.listen(process.env.PORT, () => {
    console.log('server is up....')
})
