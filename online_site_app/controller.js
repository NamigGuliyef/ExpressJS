import { userModel } from "./model.js"
export const allData = async (req, res) => {
    const allData = await userModel.find()
    res.status(200)
    res.statusMessage = 'OK'
    res.send(allData)
}


export const getById = async (req, res) => {
    const _id = req.params.Id
    const getById = await userModel.findOne({ _id })
    res.status(200)
    res.statusMessage = 'OK'
    res.send(getById)
}

export const updateData = async (req, res) => {
    const body = req.body
    const _id = req.params.Id
    const updateData = await userModel.findOneAndUpdate({ _id }, {
        $set: body
    }, { new: true })
    res.send(updateData)
}


export const deletedId = async (req, res) => {
    const _id = req.params.Id
    const deletedId = await userModel.findOneAndDelete({ _id })
    res.send(deletedId)
}
