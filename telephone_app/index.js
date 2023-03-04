import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import phoneModel from './schema.js'
import storageMulter from './multer.js'
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
dotenv.config()

const app = express()

app.use(express.urlencoded())
app.use(express.static(path.resolve("")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})


app.post("/upload", storageMulter.single('photo'), async (req, res) => {
        await phoneModel.create({
            model: req.body.model,
            ram: req.body.ram,
            memory: req.body.memory,
            camera: req.body.camera,
            photo: req.file.path
        })
        res.send("New created phone!")
})

app.get('/phones', async (req, res) => {
    const allData = await phoneModel.find()
    allData.forEach((phone) => {
        res.write(
            ` <div>
            <h5>id: ${phone._id}</h5>
            <h5>model: ${phone.model}</h5>
            <h5>ram: ${phone.ram}</h5>
            <h5>memory: ${phone.memory}</h5>
            <h5>camera: ${phone.camera}</h5>
            <img style="width:100px;height:100px;" src="/${phone.photo}" alt="${phone.photo}">
            <hr>
            </div>
            `
        )
    })
    res.send()
})


app.listen(process.env.PORT, () => {
    console.log('server is up...')
})
