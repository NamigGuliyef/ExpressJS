import mongoose, { model, Schema } from "mongoose"
export const teachModel = model("teacher", Schema({
    name: String,
    surname: String,
    age: Number,
    lesson: String,
    director: String,
    school_No: String,
    directorId: String,
    schoolId: String,
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true }))
