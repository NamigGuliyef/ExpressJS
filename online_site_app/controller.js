import { userModel } from "./model.js"
import bcrypt from 'bcrypt'
export const allData = async (req, res) => {
    const allData = await userModel.find()
    res.status(200)
    res.statusMessage = 'OK'
    res.send(allData)
}


export const getById = async (req, res) => {
    const _id = req.params.Id
    const getById = await userModel.findOne({ _id })
    res.status(200)
    res.statusMessage = 'OK'
    res.send(getById)
}


export const createData = async (req, res) => {
    const body = req.body
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(body.password, salt)
    const createData = await userModel.create({
        name: body.name,
        surname: body.surname,
        age: body.age,
        email: body.email,
        password: hashedPass
    })
    res.status(201)
    res.statusMessage = 'created'
    res.send(createData)
}


export const updateData = async (req, res) => {
    const body = req.body
    const _id = req.params.Id
    const updateData = await userModel.findOneAndUpdate({ _id }, {
        $set: body
    }, { new: true })
    res.send(updateData)
}


export const deletedId = async (req, res) => {
    const _id = req.params.Id
    const deletedId = await userModel.findOneAndDelete({ _id })
    res.send(deletedId)
}
