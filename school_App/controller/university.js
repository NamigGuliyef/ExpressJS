import uniModel from "../model/university.js"


export const allData = async (req, res) => {
    const allData = await uniModel.find()
    res.send(allData)
}

export const getById = async (req, res) => {
    const _id = req.params.Id
    const data = await uniModel.findOne({ _id })
    res.send(data)
}

export const createData = async (req, res) => {
    const uniBody = req.body
    const createData = await uniModel.create(uniBody)
    res.send(createData)
}

export const updateData=async (req, res) => {
    const _id = req.params.Id
    const uniBody = req.body
    const updateData = await uniModel.findByIdAndUpdate({ _id }, {
        $set: uniBody
    }, { new: true })
    res.send(updateData)
}

export const deletedData=async (req, res) => {
    const _id = req.params.Id
    const deletedData = await uniModel.findByIdAndDelete({ _id })
    res.send(deletedData)
}
