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
    company: {
        type: String,
        required: true
    },
    department: {
        type: String,
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'department'
    }

}, { versionKey: false, timestamps: true })

export default EmployeeSchema