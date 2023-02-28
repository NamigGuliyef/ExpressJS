import mongoose, { connect } from "mongoose";
import express from 'express'
import dotenv from 'dotenv'
import warehouseRouter from "./router/warehouse.js";
import productRouter from "./router/product.js";
const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority"
connect(uri)
dotenv.config()
const app = express()

app.use(express.json())
app.use('/warehouse', warehouseRouter)
app.use('/product', productRouter)


app.listen(process.env.PORT, () => {
    console.log('server is up ...')
})
