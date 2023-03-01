import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import phoneModel from './schema.js'
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})


app.post('/upload', (req, res) => {
    console.log(req.body)
    console.log(req.file)
res.send('OK')
})

app.listen(process.env.PORT, () => {
    console.log('server is up...')
})

