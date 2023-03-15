import mongoose, { model, Schema } from "mongoose";
const employeeSchema = new Schema({
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
        default: 'employee'
    },
    directorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'director'
    }
})

const employeeModel = model('employee', employeeSchema)
export default employeeModel
