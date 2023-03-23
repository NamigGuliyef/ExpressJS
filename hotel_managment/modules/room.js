import mongoose, { model, Schema } from "mongoose";
const roomSchema = new Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    occupancy: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'reservation'
    }
}, { versionKey: false })


const roomModel = model('room', roomSchema)
export default roomModel;
