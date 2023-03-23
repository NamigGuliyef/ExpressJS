import mongoose, { model, Schema } from "mongoose";
const reservSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    roomNumber: {
        type: Number,
        required: true
    },
    checkInDate: {
        type: String,
        required: true,
    },
    checkOutDate: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { versionKey: false })


reservSchema.post('save', async function () {
    const foundUser = await mongoose.model('user').findOne({ _id: this.userId })
    await mongoose.model('room').findOneAndUpdate({ roomNumber: this.roomNumber },
        { $push: { users: foundUser._id } }, { new: true })
})



const reservModel = model('reservation', reservSchema)
export default reservModel;
