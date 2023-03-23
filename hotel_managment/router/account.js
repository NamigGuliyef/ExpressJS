import { Router } from "express";
import userModel from "../modules/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const r = Router()
export const jwt_secret = 'namiq'



r.post('/sign-up', async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    const hashedPass = await bcrypt.hash(password, await bcrypt.genSalt())
    const createUser = await userModel.create({ firstName, lastName, email, password: hashedPass })
    res.send(createUser)
})



r.post('/sign-in', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(403).send('Email yanlisdir!')
    }
    const passRight = await bcrypt.compare(password, user.password)
    if (!passRight) {
        return res.status(403).send('Sifre yanlisdir!')
    }
    const token = jwt.sign({ email, role: user.role }, jwt_secret)
    return res.send(token)
})

export default r