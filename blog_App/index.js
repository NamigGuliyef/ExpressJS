import mongoose, { connect } from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import userModel from './model/user.js'
import blogModel from './model/blog.js'
import categoryModel from './model/category.js'
import bcrypt from 'bcrypt'
import path from "path";
import multerStroge from "./multer.js";
import authMiddleware from "./auth.js";
import jwt from 'jsonwebtoken'

connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")
dotenv.config()
const app = express()
app.use(express.static('public'))
app.use(express.urlencoded())

export const JWT_SECRET = 'BLOG_SECRET'

app.get('/pages/signup', (req, res) => {
    res.sendFile(path.resolve('./pages/signup.html'))
})


app.get('/pages/signin', (req, res) => {
    res.sendFile(path.resolve('./pages/signin.html'))
})


app.post('/sign-up', multerStroge.single('photo'), async (req, res) => {
    const { username, name, surname, job, email, password } = req.body
    const filename = req.file.filename
    const hashedPass = await bcrypt.hash(password, await bcrypt.genSalt())
    await userModel.create({
        username, name, surname, job, email,
        password: hashedPass,
        photo: filename
    })
    return res.redirect('./pages/signin')
})



app.post('/sign-in', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        res.send('bele bir user yoxdur!')
    }
    const passwordRight = bcrypt.compare(password, user.password)
    if (!passwordRight) {
        res.send('Parol yanlisdir!')
    }
    const token = jwt.sign({ email }, JWT_SECRET)
    return res.redirect(`profile/${token}`)
})


app.get('/profile/:token', authMiddleware, async (req, res) => {
    const user = await userModel.findOne({ email: req.email })
    res.send(
        `<h3>username: ${user.username}</h3>
         <h3>job: ${user.job}</h3 >
         <img style="width: 200px;height: 200px;" src="/photos/${user.photo}" alt="${user.username}"><br><br>
         <a href="/blog-create/${req.params.token}">Blog create</a> `
    )
})


app.get('/blog-create/:token', authMiddleware, async (req, res) => {
    res.sendFile(path.resolve('./pages/blog_create.html'))
})


app.post('/blog_create/:token', authMiddleware, async (req, res) => {
    const user = await userModel.findOne({ email: req.email })
    const { title, description, categoryId } = req.body
    const newBlog = await blogModel.create({ title, description, categoryId, userId: user._id })
    return res.redirect(`/blog/:${newBlog._id}`)
})


app.get('/blog/:id', async (req, res) => {
    const _id = req.params._id
    const blog = await blogModel.findOne(_id)
    const user = await userModel.findOne(blog.userId)
    return res.send(`
         <h3 style="color:red">title : ${blog.title}</h3>
         <h3 style="color:blue">description :  ${blog.description}</h3><br>
         <img style="width: 200px;height: 200px;" src="/photos/${user.photo}" alt="${user.username}">
         <h3>${user.name} ${user.surname} </h3>
    `)
})

app.listen(process.env.PORT, (req, res) => {
    console.log('server is up ....')
})
