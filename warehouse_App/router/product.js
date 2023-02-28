import { Router } from "express";
import { productModel } from "../model/product.js";
const r = Router()

r.get('/', async (req, res) => {
    const allData = await productModel.find()
    res.send(allData)
})


r.get('/warehouse/:warehouseId', async (req, res) => {
    const products = await productModel.find({ warehouseId: req.params.warehouseId })
    res.send(products)
})


r.get('/:Id', async (req, res) => {
    const getData = await productModel.findOne({ _id: req.params.Id })
    res.send(getData)
})



r.post('/', async (req, res) => {
    const createData = await productModel.create(req.body)
    res.send(createData)
})


r.put('/:Id', async (req, res) => {
    const updateData = await productModel.findOneAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
})


r.delete('/:Id', async (req, res) => {
    const deletedData = await productModel.findOneAndDelete({ _id: req.param.Id })
    res.send(deletedData)
})


export default r