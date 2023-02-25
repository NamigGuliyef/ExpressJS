import mongoose, { connect } from "mongoose";
import express from 'express'
import CompanyRouter from "./router/company.js";
import DepartmentRouter from "./router/department.js";
import EmployeeRouter from "./router/employee.js";
import dotenv from 'dotenv'
dotenv.config()

const uri = "mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority";
connect(uri)

const app = express()

app.use(express.json())

app.use('/companies', CompanyRouter)
app.use('/departments', DepartmentRouter)
app.use('/employees', EmployeeRouter)


const port = process.env.EXPRESS_APP_PORT

app.listen(port, () => {
    console.log('server is up ....')
})
