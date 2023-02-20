// A: best killer 🗡
import mongoose, { connect } from "mongoose";
import express from 'express'
import ProductRouter from "./router.js";
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)
const app = express()

app.use(express.json())
app.use('/products', ProductRouter)

app.listen(5055, () => {
    console.log('server is up....')
})
