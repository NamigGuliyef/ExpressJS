import { compare, genSalt, hash } from 'bcrypt'
import express from 'express'
import path from 'path'
import { connectDB } from './db/data.js'
import { noteModel } from './models/notes.js'
import { userModel } from './models/user.js'
import jwt from 'jsonwebtoken'
const app = express()
const port = 6050
connectDB()
app.use(express.json())

app.get('/', (req, res) => { res.sendFile(path.resolve('pages/index.html')) })
app.get('/login', (req, res) => { res.sendFile(path.resolve('pages/login.html')) })
app.get('/signup', (req, res) => { res.sendFile(path.resolve('pages/signup.html')) })

//user create
app.post('/signup', async (req, res) => {
    // const { email, password } = req.body
    // const hashPass = await hash(password, await genSalt())
    const user = await userModel.create(req.body)
    return res.status(200).send({ success: true, message: "user created successfully", user })
})

//get user
app.post('/login', async (req, res) => {
    const user = await userModel.findOne(req.body)
    if (!user) {
        return res.status(404).send('user not found!')
    }
    // if (!user.email) {
    //     return res.status(401).send({ success: false, message: "email is wrong!" })
    // }
    // const passRight = await compare(user.password, password)
    // if (!passRight) {
    //     return res.status(401).send({ success: false, message: "password is wrong!" })
    // }
    // const token = jwt.sign({ email }, 'note_app_23')
    return res.status(200).send({ success: true, message: "login successfully", user: { email: user.email } })
})

app.post("/addnote", async (req, res) => {
    const note = await noteModel.create(req.body)
    return res.status(200).send({ success: true, message: "New note created successfully", note })
})

app.post("/getnotes", async (req, res) => {
    let notes = await noteModel.find({ email: req.body.email })
    return res.status(200).send({ success: true, notes } )
})


app.listen(port, () => console.log(`Port ${port} server is up ....`))