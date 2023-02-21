import mongoose, { Schema } from "mongoose";
const pupilSchema = new Schema({
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

export default pupilSchema;