import mongoose, { model, Schema } from "mongoose"
export const teachModel = model("teacher", Schema({
    name: String,
    surname: String,
    age: Number,
    lesson: String,
    director: String,
    school_No: String,
    directorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "directors"
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "schools"
    },
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true }))
