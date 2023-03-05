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
        ref:'university'
    }
}, { versionKey: false })

const studentModel = model('student', studentSchema)
export default studentModel
