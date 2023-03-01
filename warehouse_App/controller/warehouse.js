import { warehouseModel } from "../model/warehouse.js"

export const getAll = async (req, res) => {
    const allData = await warehouseModel.find()
    res.send(allData)
}

export const getById = async (req, res) => {
    const getData = await warehouseModel.findOne({ _id: req.params.Id })
    res.send(getData)
}

export const createData = async (req, res) => {
    const createData = await warehouseModel.create(req.body)
    res.send(createData)
}

export const updateData = async (req, res) => {
    const updateData = await warehouseModel.findOneAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
}

export const deletedData = async (req, res) => {
    const deletedData = await warehouseModel.findOneAndDelete({ _id: req.params.Id })
    res.send(deletedData)
}