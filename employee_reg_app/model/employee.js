import mongoose, { model, Schema } from "mongoose";
const employeeSchema = new Schema({
    role: {
        type: String,
        required: true,
        default: 'director'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false })

const employeeModel = model('employee', employeeSchema)
export default employeeModel
