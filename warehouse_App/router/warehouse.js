import { Router } from "express";
import { warehouseModel } from "../model/warehouse.js";
const r = Router()


r.get('/', async (req, res) => {
    const allData = await warehouseModel.find()
    res.send(allData)
})


r.get('/:Id', async (req, res) => {
    const getData = await warehouseModel.findOne({ _id: req.params.Id })
    res.send(getData)
})


r.post('/', async (req, res) => {
    const createData = await warehouseModel.create(req.body)
    res.send(createData)
})


r.put('/:Id', async (req, res) => {
    const updateData = await warehouseModel.findOneAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
})


r.delete('/:Id', async (req, res) => {
    const deletedData = await warehouseModel.findOneAndDelete({ _id: req.params.Id })
    res.send(deletedData)
})


export default r