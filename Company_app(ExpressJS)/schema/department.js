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
    const isExist = await DepartmentModel.findOne({ name: this.name }) // save etmemisden evvel yoxlamaq 
    if (isExist) {   // eger varsa 
        console.log('Department has already been created ')
        process.exit(-1) // prosesi  dayandirir
    }
    next()  // eks halda novbeti prosesi icra edir
})


DepartmentSchema.pre('findOneAndDelete', async function (next) {
    const DepId = this.getFilter()._id  // silinen departamentin Id - si ( arqument )
    const department = await DepartmentModel.findOne({ _id: DepId }).clone()  // həmin İD modelde hansi obyektin
                                                                // ID -sine uygundursa tapmaq
    await CompanyModel.updateOne({ companyId: department.companyId }, { // tapilan ID -ni company den silmek ucun
                                // companyID=departamentde olan comp ID beraberdirse silinmis ID ni 
                                // company-den departmentin silinmis ID -sini cixartsin
        $pull: { departmentId: DepId }
    })
    next()
})


DepartmentSchema.post('save', async function () {
    const depId = this._id  // yaradilan obyektin ID si tapilsin
    await CompanyModel.findOneAndUpdate(this.companyId, {  // hemin comp ID => companyde olan dep.ID ye elave olunsun.
        $push: { departmentId: depId }
    })
})


export default DepartmentSchema