import mongoose, { Schema } from "mongoose";
const classSchema = new Schema({
    Number: String,
    number_of_pupils: Number,
    school_No: String,
    teacher: String,
    schoolId: String,
    directorId: String,
    teacherId: String,
    pupil: [mongoose.ObjectId]
})

export default classSchema;