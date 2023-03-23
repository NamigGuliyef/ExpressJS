import mongoose, { connect } from "mongoose";
import express from 'express';
import userRouter from './router/user.js'
import adminRouter from './router/admin.js'
import accountRouter from './router/account.js'
import userAuthMiddleWare from './middleWare/user.js'
import adminAuthMiddleWare from './middleWare/admin.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")
const app = express()
app.use(express.json())


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hotel managment API",
        version: "0.1.0",
        description:
          "Otelin idare olunmasi zaman bas veren prosesleri icra edir!",
        
        contact: {
          name: "Guliyef Namig",
          email: "quliyevnamiq8@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:5050",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer Token',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: {
        bearerAuth: [],
      },
    },
    apis: ["./router/*.js"],
  };
  
  const specs = swaggerJSDoc(options);
  app.use(
    "/api-v1",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );



app.use('/api', accountRouter)// signin signup
app.use('/api/user',userAuthMiddleWare, userRouter)// FIND , FINDONE
app.use('/api/admin',adminAuthMiddleWare, adminRouter) 



app.listen(5050, (req, res) => {
    console.log('server is up...')
})
