import express from 'express'
import mongoose, { connect } from 'mongoose'
import directorRouter from './router/director.js'
import employeeRouter from './router/employee.js'
connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")
const app = express()


app.use('/director', directorRouter)
app.use('/employee', employeeRouter)


app.post('/signin', async (req, res) => {
    const { name, surname } = req.body
})



















app.listen(6040, () => {
    console.log('server is up....')
})