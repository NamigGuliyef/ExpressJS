import mongoose, { Schema } from "mongoose";
const schoolSchema = new Schema({
    Number: String,
    location: String,
    director: [mongoose.ObjectId],
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
})

export default schoolSchema;