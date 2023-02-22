import mongoose, { model } from "mongoose";

export const classModel = model("class", {
    Number: String,
    number_of_pupils: Number,
    school_No: String,
    teacher: String,
    schoolId: String,
    directorId: String,
    teacherId: String,
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true })
