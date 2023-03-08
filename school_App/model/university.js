import mongoose, { model, Schema } from "mongoose";
const uniSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    number_of_students: {
        type: Number,
        required: true
    },
    students: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'student'
    }
}, { versionKey: false })


uniSchema.pre('findOneAndDelete', async function (next) {
    const universityId = this.getFilter()._id
    await mongoose.model('student').deleteMany({universityId})
    next()
})


const uniModel = model('university', uniSchema)
export default uniModel
