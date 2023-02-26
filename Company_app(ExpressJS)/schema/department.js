import mongoose, { Schema } from "mongoose";
import CompanyModel from "../model/company.js";
import DepartmentModel from "../model/department.js";
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    employeeId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employee'
    }]

}, { versionKey: false, timestamps: true })



DepartmentSchema.pre('save', async function (next) {
    const isExist = await DepartmentModel.findOne({ name: this.name })
    if (isExist) {
        console.log('Department has already been created ')
        process.exit(-1)
    }
    next()
})


DepartmentSchema.pre('findOneAndDelete', async function (next) {
    const DepId = this.getFilter()._id
    const department = await DepartmentModel.findOne({ _id: DepId }).clone()
    await CompanyModel.updateOne({ _id: department.companyId }, {
        $pull: { departmentId: DepId }
    })
    next()
})


DepartmentSchema.post('save', async function () {
    const depId = this._id
    await CompanyModel.findOneAndUpdate(this.companyId, {
        $push: { departmentId: depId }
    })
})



DepartmentSchema.pre('findOneAndDelete', async function (next) {
    const depId = this.getFilter()._id
    await mongoose.model('employee').deleteMany({ departmentId: depId })
    next()
})



export default DepartmentSchema