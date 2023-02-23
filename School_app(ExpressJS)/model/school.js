import mongoose, { model, Schema } from "mongoose";
export const schoolModel = model('school', Schema({
    school_No: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    director: [mongoose.ObjectId],
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true }))
