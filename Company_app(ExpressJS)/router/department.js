import { Router } from "express";
import DepartmentModel from "../model/department.js";

const r = Router()

r.get('/', async (req, res) => {
    const AllData = await DepartmentModel.find()
    res.send(AllData)
})

r.get('/companies/:companyId', async (req, res) => {
    const departments = await DepartmentModel.find({ companyId: req.params.companyId })
    res.send(departments)
})

r.get('/:depId', async (req, res) => {
    const FoundId = await DepartmentModel.findOne({ _id: req.params.depId })
    res.send(FoundId)
})

r.post('/', async (req, res) => {
    const CreateData = await DepartmentModel.create(req.body)
    res.send(CreateData)
})

r.put('/:depId', async (req, res) => {
    const UpdateData = await DepartmentModel.findOneAndUpdate({ _id: req.params.depId }, {
        $set: req.body
    }, { new: true })
    res.send(UpdateData)
})

r.delete('/:depId', async (req, res) => {
    const DeletedId = await DepartmentModel.findOneAndDelete({ _id: req.params.depId })
    res.send(DeletedId)
})

export default r