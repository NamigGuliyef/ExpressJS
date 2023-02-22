import express from 'express'
import mongoose, { connect } from 'mongoose'
import directorRouter from './router/director.js'
import schoolRouter from './router/school.js'
import teachRouter from './router/teacher.js'
import classRouter from './router/class.js'
import pupilRouter from './router/pupil.js'
import dotenv from 'dotenv'
dotenv.config()

const uri = "mongodb+srv://node01:node01@cluster0.2drqhim.mongodb.net/?retryWrites=true&w=majority"
connect(uri)

const app = express()

app.use('/directors', directorRouter)
app.use('/schools', schoolRouter)
app.use('/teachers', teachRouter)
app.use('/classes', classRouter)
app.use('/pupils', pupilRouter)


app.listen(process.env.EXPRESS_APP_PORT, () => {
    console.log('server is up....')
})
