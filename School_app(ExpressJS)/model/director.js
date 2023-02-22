import mongoose, { model } from "mongoose";
export const directorModel = model("director", {
    name: String,
    surname: String,
    age: Number,
    school_No: String,
    appointment_school: String,
    schoolId: String,
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
})
