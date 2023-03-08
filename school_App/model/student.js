import mongoose, { model, Schema } from "mongoose";
const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    universityId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'university'
    }
}, { versionKey: false })



studentSchema.post('save', async function () {
    await mongoose.model('university').findOneAndUpdate({ _id: this.universityId }, {
        $push: { students: this._id }
    })
})


studentSchema.pre('findOneAndDelete', async function (next) {
    const _id = this.getFilter()._id
    const deletedData = await mongoose.model('student').findOne({ _id }).clone()
    await mongoose.model('university').updateOne({ _id: deletedData.universityId }, {
        $pull: { students: _id }
    })
    next()
})


studentSchema.pre('save', async function (next) {
    const studentExist = await mongoose.model('student').findOne({ name: this.name, surname: this.surname })
    if (studentExist) {
        console.log(new Error("Telebinin adi ve soyadi movcuddur!"))
        process.exit(-1)
    }
    next()
})


const studentModel = model('student', studentSchema)
export default studentModel
