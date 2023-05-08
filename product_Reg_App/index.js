import express from 'express'
import mongoose, { connect } from 'mongoose'
import path from 'path'
import userModel from './userSchema.js'
import productModel from './productSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authMiddleWare from './authMiddelware.js'

connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")


const app = express()
app.use(express.static('public'))
app.use(express.urlencoded())

export const JWT_SECRET = 'user_secret'

app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/signin', (req, res) => {
    res.sendFile(path.resolve('./signin.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.resolve('./signup.html'))
})

app.post('/sign-up', async (req, res) => {
    const { username, name, surname, email, password } = req.body
    let hashedPass = await bcrypt.hash(password, await bcrypt.genSalt())
    const newProduct = await userModel.create({
        username, name, surname, email, password: hashedPass
    })
    return res.redirect('/signin')
})

app.post('/sign-in', async (req, res) => {
    const { username, password } = req.body
    const user = await userModel.findOne({ username })
    if (!user) {
        res.send('İstifadəçi bazada mövcud deyil')
    }
    const passwordRight = bcrypt.compare(password, user.password)
    if (!passwordRight) {
        res.send('Parolu dogru daxil edin!')
    }
    const token = jwt.sign({ username }, JWT_SECRET)
    return res.redirect(`profile/${token}`)
})

app.get('/profile/:token', authMiddleWare, async (req, res) => {
    const user = await userModel.findOne({ username: req.username })
    res.send(`
    <h3>id: ${user._id}</h3>
    <h3>İstifadəçi adı: ${user.username}</h3>
    <h3>Ad: ${user.name}</h3>
    <h3>Soyad: ${user.surname}</h3>
    <a href="/addProduct/${req.params.token}">Məhsul yarat</a> `
    )
})

app.get('/addProduct/:token', authMiddleWare, async (req, res) => {
    res.sendFile(path.resolve('./addProduct.html'))
})

app.post('/add-Product/:token', authMiddleWare, async (req, res) => {
    const user = await userModel.findOne({ username: req.username })
    const { name, type, price } = req.body
    const newProduct = await productModel.create({ name, type, price, userId: user._id })
    return res.redirect(`/product/${newProduct._id}`)
})

app.get('/product/:id', async (req, res) => {
    const _id = req.params.id
    const product = await productModel.findOne({ _id })
    const user = await userModel.findOne(product.userId)
    return res.send(`
         <h3 style="color:red">Məhsul adı : ${product.name}</h3>
         <h3 style="color:blue">Məhsul növü :  ${product.type}</h3>
         <h3 style="color:blue">Məhsul qiyməti :  ${product.price}</h3><br>
         <h3>${user.name} ${user.surname} </h3> `
    )
})

app.listen(6060, (req, res) => {
    console.log('server is up ...')
})
