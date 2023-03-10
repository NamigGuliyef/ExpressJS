import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path';
import userModel from './model.js';
import bcrypt from 'bcrypt'
import storageMulter from './multer.js';
import jwt from 'jsonwebtoken'
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
dotenv.config()
const app = express()

app.use(express.urlencoded())
app.use(express.static('public'))

const JWT_SECRET = 'CVT_S4CR4T'

app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.resolve('./signup.html'))
})

app.get('/signin', (req, res) => {
    res.sendFile(path.resolve('./signin.html'))
})


app.post('/sign-up', storageMulter.single('photo'), async (req, res) => {
    const body = req.body
    const file = req.file
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(body.password, salt)
    const createData = await userModel.create({
        name: body.name,
        surname: body.surname,
        age: body.age,
        email: body.email,
        password: hashedPass,
        photo: file.path
    })
    res.send(`<h3>New user created! ID: ${createData._id}</h3>
    <a href="/signin">signin</a>
    `)
})


app.post('/sign-in', async (req, res) => {
    const body = req.body
    const nameExist = await userModel.findOne({ email: body.email })
    if (!nameExist) {
        res.send('Bele user yoxdur!')
    }
    const passRight = await bcrypt.compare(body.password, nameExist.password)
    if (!passRight) {
        res.send('Parol yanlisdir!')
    }
    const token = jwt.sign({email:body.email},JWT_SECRET)
    res.send({ token })
})


app.listen(process.env.PORT, () => {
    console.log('server is up....')
})
