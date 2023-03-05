import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path';
import userModel from './model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
const app = express()
dotenv.config()

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/reg', (req, res) => {
    res.sendFile(path.resolve('./reg.html'))
})

app.get('/signin', (req, res) => {
    res.sendFile(path.resolve('./signin.html'))
})



app.post('/registration', async (req, res) => {
    const body = req.body
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(body.password, salt)
    const createData = await userModel.create({
        username: body.username,
        email: body.email,
        password: hashedPass
    })
    res.sendFile(path.resolve('./success.html'))
})



app.post('/signin', async (req, res) => {
    const body = req.body
    const userExist = await userModel.findOne({ email: body.email })
    if (userExist) {
        const isPassRight = await bcrypt.compare(body.password, userExist.password)
        if (isPassRight) {
            const JWT_sECRET = 'secret'
            const token = jwt.sign({ username: userExist.username, email: userExist.email, password: userExist.password, _id: userExist._id }, JWT_sECRET)
            res.send(`<div>
            <h4 style="color:brown">username :  ${userExist.username}</h4>
            <h4 style="color:brown">email :  ${userExist.email}</h4>
            <h4 style="color:brown">password :  ${userExist.password}</h4>
            <h4 style="color:brown">token : ${token}</h4>
            </div>`
            )
        }
    }
    res.send('Sifre ve ya parol yanlisdir!')
})


app.listen(process.env.PORT, () => {
    console.log('server is up ....')
})
