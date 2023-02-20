import mongoose, { Schema } from "mongoose";
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    build_date: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    departmentId: [mongoose.ObjectId],
    employeeId: [mongoose.ObjectId]
    
}, { versionKey: false })
export default CompanySchema
