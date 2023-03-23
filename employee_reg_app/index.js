import express from 'express'
import mongoose, { connect } from 'mongoose'
import employeeModel from './model/employee.js'
import jwt from 'jsonwebtoken'
import { authMiddleware } from './authMiddleware.js'
export const jwt_secret = 'emp'

connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")
const app = express()
app.use(express.json())

app.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const employee = await employeeModel.findOne({ email })
    if (employee.password !== password) {
        res.send('Parol yanlisdir')
    }
    const token = jwt.sign({ email, role: employee.role }, jwt_secret)
    res.send(token)
})


app.get('/director', authMiddleware, async (req, res) => {
    const allData = await employeeModel.find()
    res.send(allData)
})

app.get('/director/:Id', authMiddleware, async (req, res) => {
    const { Id } = req.params
    const getData = await employeeModel.findOne({ _id: Id })
    res.send(getData)
})

app.post('/director', authMiddleware, async (req, res) => {
    const body = req.body
    const createData = await employeeModel.create(body)
    res.send(createData)
})

app.put('/director/:Id', authMiddleware, async (req, res) => {
    const body = req.body
    const { Id } = req.params
    const updateData = await employeeModel.findOneAndUpdate({ _id: Id }, {
        $set: body
    }, { new: true })
    res.send(updateData)
})

app.delete('/director/:Id', authMiddleware, async (req, res) => {
    const { Id } = req.params
    const deleteData = await employeeModel.findOneAndDelete({ _id: Id })
    res.send(deleteData)
})


app.get('/employee', authMiddleware, async (req, res) => {
    const allData = await employeeModel.find()
    res.send(allData)
})



app.listen(6040, () => {
    console.log('server is up....')
})
