import express from 'express'
import mongoose, { connect } from 'mongoose'
const uri = "mongodb+srv://node01:node01@cluster0.2drqhim.mongodb.net/?retryWrites=true&w=majority"
connect(uri)

const app = express()


app.listen(5060, () => {
    console.log('server is up....')
})
