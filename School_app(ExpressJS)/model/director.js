import mongoose, { model, Schema } from "mongoose";
export const directorModel = model("director",Schema({
    name: String,
    surname: String,
    age: Number,
    school_No: String,
    appointment_school: String,
    schoolId: String,
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}))
