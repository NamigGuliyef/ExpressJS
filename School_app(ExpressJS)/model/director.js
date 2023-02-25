import mongoose, { model, Schema } from "mongoose";
export const directorModel = model("director", Schema({
    name: String,
    surname: String,
    age: Number,
    appointment_school: Number,
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "schools"
    },
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true }))
