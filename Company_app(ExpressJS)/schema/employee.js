import mongoose, { Schema } from "mongoose";
const EmployeeSchema = new Schema({
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
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    companyId: {
        type: mongoose.ObjectId,
        required: true
    },
    departmentId: {
        type: mongoose.ObjectId,
        required: true
    }
   
}, { versionKey: false })
export default EmployeeSchema