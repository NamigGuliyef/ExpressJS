import mongoose, { model } from "mongoose";
export const pupilModel = model("pupil", {
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
})
