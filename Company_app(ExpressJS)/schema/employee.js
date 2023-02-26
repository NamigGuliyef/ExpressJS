import mongoose, { mongo, Schema } from "mongoose";
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



EmployeeSchema.pre('save', async function (next) {
    const empName = this.name
    const isExist = await mongoose.model('employee').findOne({ name: empName })
    if (isExist) {
        console.log('Employee has already been created ')
        process.exit(-1)
    }
    next()
})


EmployeeSchema.pre('findOneAndDelete', async function (next) {
    const empId = this.getFilter()._id
    const employee = await mongoose.model('employee').findOne({ _id: empId }).clone()
    await mongoose.model('department').updateOne({ _id: employee.departmentId }, {
        $pull: { employeeId: empId }
    })
    next()
})


EmployeeSchema.post('save', async function () {
    const newEmpId = this._id
    await mongoose.model('department').findOneAndUpdate(this.departmentId, {
        $push: { employeeId: newEmpId }
    })
})


export default EmployeeSchema