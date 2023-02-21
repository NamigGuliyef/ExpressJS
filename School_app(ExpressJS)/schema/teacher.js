import mongoose, { Schema } from "mongoose";
const teacherSchema = new Schema({
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
})

export default teacherSchema;
