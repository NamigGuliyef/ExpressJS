import mongoose, { model, Schema } from "mongoose";
export const schoolModel = model("school", Schema({
    Number: String,
    location: String,
    director: [mongoose.ObjectId],
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}))
