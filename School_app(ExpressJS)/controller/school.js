import { schoolModel } from "../model/school.js";

export const getData = async (req, res) => {
    const data = await schoolModel.find()
    res.send(data)
}

export const getById = async (req, res) => {
    const data = await schoolModel.findOne({ _id: req.params.Id })
    res.send(data)
}

export const createData = async (req, res) => {
    const newSchool = req.body
    const data = await schoolModel.create(newSchool)
    res.send(data)
}

export const updateData = async (req, res) => {
    const updateData = await schoolModel.findByIdAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
}

export const deletedData = async (req, res) => {
    const { _id } = await schoolModel.findByIdAndDelete({ _id: req.params.Id })
    res.send(_id + " silindi")
}
