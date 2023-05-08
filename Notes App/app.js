import dotenv from 'dotenv'
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
dotenv.config()
const app = express()
app.use(express.json())
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT, () => console.log(`Port ${process.env.PORT} server is up...`))
