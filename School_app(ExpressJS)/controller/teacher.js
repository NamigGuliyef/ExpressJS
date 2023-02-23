import { teachModel } from "../model/teacher.js";

export const getAll = async (req, res) => {
    const data = await teachModel.find()
    res.send(data)
}

export const getByID = async (req, res) => {
    const data = await teachModel.findOne({ _id: req.params.Id })
    res.send(data)
}
