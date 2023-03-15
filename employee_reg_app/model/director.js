import mongoose, { model, Schema } from "mongoose";
const directorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'director'
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee',
    }
})

const directorModel = model('director', directorSchema)
export default directorModel
