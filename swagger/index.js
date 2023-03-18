import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import bookRouter from './bookRouter.js'
import mongoose, { connect } from 'mongoose'
connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")

const app = express()
app.use(express.json())


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Namiq",
                email: "quliyevnamiq8@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:6050",
            },
        ],
    },
    apis: ["./bookRouter.js"],
};

const specs = swaggerJSDoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.use('/books', bookRouter)

app.listen(6050, (req, res) => {
    console.log('server is up....')
})
