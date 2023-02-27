import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import { clubModel } from './model/index.js'
import path from 'path'
import multer from 'multer'
import multerStorage from './multer.js'
const uri = "mongodb+srv://football:football1@cluster0.kk1kc8e.mongodb.net/?retryWrites=true&w=majority"
connect(uri)
dotenv.config()
const app = express()

app.use(express.urlencoded())
app.use(express.static(path.resolve()))


app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
    console.log(path.resolve())
})


app.get('/clubs', async (req, res) => {
    const data = await clubModel.find()
    data.forEach((club) => {
        res.write(

            `<div >
             <h5 style="color:blue">ID: ${club._id}</h5>
             <h5 style="color:red">name: ${club.name}</h5>
             <h5 style="color:green">about: ${club.about}</h5>
             <img src="/${club.photo}" alt="photo"><hr>
             </div>
            `
        )
    })
    res.send()
})

app.post('/upload', multerStorage.single('photo'), async (req, res) => {
    const data = await clubModel.create({
        name: req.body.name,
        about: req.body.about,
        photo: req.file.path
    })
    res.send('New club created')
})

app.listen(process.env.PORT, () => {
    console.log('server is up...')
})
