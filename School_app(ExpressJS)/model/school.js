import mongoose, { model } from "mongoose";
export const schoolModel = model("school", {
    Number: String,
    location: String,
    director: [mongoose.ObjectId],
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
})
