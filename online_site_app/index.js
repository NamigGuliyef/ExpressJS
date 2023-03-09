import mongoose, { connect } from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import userRouter from "./router.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from "./model.js";
import authMiddleware from "./auth.js";
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
dotenv.config()
const app = express()

app.use(express.json())
app.use('/users', userRouter)

app.post('/reg', async (req, res) => {
    const body = req.body
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(body.password, salt)
    const createData = await userModel.create({
        name: body.name,
        surname: body.surname,
        age: body.age,
        email: body.email,
        password: hashedPass
    })
    res.status(201)
    res.statusMessage = 'created'
    res.send(createData)
})


export const JWT_SECRET = 'S4CR4I'
app.post('/signin', async (req, res) => {
    const body = req.body
    const userExist = await userModel.findOne({ email: body.email })
    if (!userExist) {
        res.status(404)
        res.statusMessage = 'not found user'
    }
    const isRightPass = await bcrypt.compare(body.password, userExist.password)
    if (!isRightPass) {
        res.send('password incorrect')
    }
    const token = jwt.sign({ email: userExist.email }, JWT_SECRET, {
        expiresIn: '1m'
    })
    res.send({ 
        _id:userExist._id,
        email:userExist.email,
        token
     })
})


app.get('/profile', authMiddleware, (req, res) => {
    res.send('Ok')
})


app.listen(process.env.PORT, () => {
    console.log('server is up...')
})
