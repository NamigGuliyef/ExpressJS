import mongoose, { Schema } from "mongoose";
const DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    worker_count: {
        type: Number,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.ObjectId,
        required: true
    },
    employeeId: [mongoose.ObjectId]

}, { versionKey: false })
export default DepartmentSchema