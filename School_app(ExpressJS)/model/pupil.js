import mongoose, { model, Schema } from "mongoose";
export const pupilModel = model("pupil",Schema({
    name: String,
    surname: String,
    school_No: String,
    director: String,
    teacher: String,
    class: String,
    schoolId: String,
    directorId: String,
    teacherId: String,
    classId: String,
}, { versionKey: false, timestamps: true }))
