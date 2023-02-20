import { Router } from "express";
import EmployeeModel from "../model/employee.js";

const r = Router()

r.get('/', async (req, res) => {
    const AllData = await EmployeeModel.find()
    res.send(AllData)
})

r.get('/companies/:companyId', async (req, res) => {
    const companies = await EmployeeModel.find({ companyId: req.params.companyId })
    res.send(companies)
})

r.get('/departments/:departmentId', async (req, res) => {
    const departments = await EmployeeModel.find({ departmentId: req.params.departmentId })
    res.send(departments)
})

r.get('/:EmpId', async (req, res) => {
    const FoundId = await EmployeeModel.findOne({ _id: req.params.EmpId })
    res.send(FoundId)
})

r.post('/', async (req, res) => {
    const CreateData = await EmployeeModel.create(req.body)
    res.send(CreateData)
})

r.put('/:EmpId', async (req, res) => {
    const UpdateData = await EmployeeModel.findOneAndUpdate({ _id: req.params.EmpId }, {
        $set: req.body
    }, { new: true })
    res.send(UpdateData)
})

r.delete('/:EmpId', async (req, res) => {
    const DeletedId = await EmployeeModel.findOneAndDelete({ _id: req.params.EmpId })
    res.send(DeletedId)
})


export default r