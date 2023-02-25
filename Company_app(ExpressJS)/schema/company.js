import mongoose, { mongo, Schema } from "mongoose";
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
    departmentId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
    }],
    employeeId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    }]

}, { versionKey: false, timestamps: true })


export default CompanySchema
