import { directorModel } from "../model/director.js";
import { schoolModel } from "../model/school.js";

export const getAll = async (req, res) => {
    const data = await directorModel.find()
    res.send(data)
}

export const getById = async (req, res) => {
    const data = await directorModel.findOne({ _id: req.params.Id })
    res.send(data)
}

export const getBySchoolId = async (req, res) => {
    const data = await directorModel.findOne({ schoolId: req.params.schoolID })
    res.send(data)
}

export const createData = async (req, res) => {
    const newDirector = req.body
    const data = await directorModel.create(newDirector)
    // await schoolModel.findByIdAndUpdate(newDirector.schoolId, {
    //     $push: { directorId: _id }
    // })
    res.send(data)
}

export const updateData = async (req, res) => {
    const updateData = await directorModel.findByIdAndUpdate({ _id: req.params.Id }, {
        $set: req.body
    }, { new: true })
    res.send(updateData)
}

export const deletedData = async (req, res) => {
    const { _id } = await directorModel.findByIdAndDelete({ _id: req.params.Id })
    res.send(_id + " silindi")
}