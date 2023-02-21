import { Router } from "express";
import CompanyModel from "../model/company.js";

const r = Router()

r.get('/', async (req, res) => {
    const AllData = await CompanyModel.find()
    res.send(AllData)
})

r.get('/:compId', async (req, res) => {
    const data = await CompanyModel.findOne({ _id: req.params.compId })
    res.send(data)
})

r.post('/', async (req, res) => {
    const createData = await CompanyModel.create(req.body)
    res.send(createData)
})

r.put('/:compId', async (req, res) => {
    const updateData = await CompanyModel.findOneAndUpdate({ _id: req.params.compId }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
})

r.delete('/:compId', async (req, res) => {
    const DeletedId = await CompanyModel.findOneAndDelete({ _id: req.params.compId })
    res.send(DeletedId)
})


export default r