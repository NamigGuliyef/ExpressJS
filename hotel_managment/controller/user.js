import roomModel from '../modules/user.js'

export const allRooms = async (req, res) => {
    const allRooms = await roomModel.find({ isActive: true })
    res.send(allRooms)
}

export const getRoomId = async (req, res) => {
    const { id } = req.params
    const room = await roomModel.findOne({ _id: id })
    res.send(room)
}

export const getAvailableRooms = async (req, res) => {
    const availableRooms = await roomModel.find({ availability: true })
    res.send(availableRooms)
}