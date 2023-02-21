import mongoose, { Schema } from "mongoose";
const directorSchema = new Schema({
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

export default directorSchema;