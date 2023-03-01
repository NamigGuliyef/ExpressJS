import { productModel } from "../model/product.js"

export const getAll = async (req, res) => {
    const allData = await productModel.find()
    res.send(allData)
}

export const getProdByWarehouseId = async (req, res) => {
    const products = await productModel.find({ warehouseId: req.params.warehouseId })
    res.send(products)
}

export const getById = async (req, res) => {
    const getData = await productModel.findOne({ _id: req.params.Id })
    res.send(getData)
}

export const createData = async (req, res) => {
    const createData = await productModel.create(req.body)
    res.send(createData)
}

export const updateData = async (req, res) => {
    const updateData = await productModel.findOneAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
}

export const deletedData = async (req, res) => {
    const deletedData = await productModel.findOneAndDelete({ _id: req.params.Id })
    res.send(deletedData)
}

export const allDelete = async (req, res) => {
    const allDelete = await productModel.deleteMany()
    res.send(allDelete)
}