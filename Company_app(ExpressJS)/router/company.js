import { Router } from "express";
import CompanyModel from "../model/company.js";

const r = Router()

r.get('/', async (req, res) => {
    const AllData = await CompanyModel.find()
    res.send(AllData)
})

r.get('/:compId', async (req, res) => {
    const FoundId = await CompanyModel.findOne({ _id: req.params.depId })
    res.send(FoundId)
})

r.post('/', async (req, res) => {
    const CreateData = await CompanyModel.create(req.body)
    res.send(CreateData)
})

r.put('/:compId', async (req, res) => {
    const UpdateData = await CompanyModel.findOneAndUpdate({ _id: req.params.depId }, {
        $set: req.body
    }, { new: true })
    res.send(UpdateData)
})

r.delete('/:compId', async (req, res) => {
    const DeletedId = await CompanyModel.findOneAndDelete({ _id: req.params.depId })
    res.send(DeletedId)
})


export default r