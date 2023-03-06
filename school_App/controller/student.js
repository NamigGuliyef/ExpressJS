import studentModel from "../model/student.js"

export const allData = async (req, res) => {
    const allData = await studentModel.find()
    res.send(allData)
}

export const getByUniId = async (req, res) => {
    const universityId = req.params.uniId
    const students = await studentModel.find({ universityId })
    res.send(students)
}

export const getById = async (req, res) => {
    const _id = req.params.Id
    const data = await studentModel.findOne({ _id })
    res.send(data)
}

export const createdData = async (req, res) => {
    const uniBody = req.body
    const createData = await studentModel.create(uniBody)
    res.send(createData)
}

export const updateData=async (req, res) => {
    const _id = req.params.Id
    const uniBody = req.body
    const updateData = await studentModel.findByIdAndUpdate({ _id }, {
        $set: uniBody
    }, { new: true })
    res.send(updateData)
}

export const deletedData=async (req, res) => {
    const _id = req.params.Id
    const deletedData = await studentModel.findOneAndDelete({ _id })
    res.send(deletedData)
}