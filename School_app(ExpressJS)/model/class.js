import mongoose, { model, Schema } from "mongoose";

export const classModel = model("class", Schema({
    Number: String,
    number_of_pupils: Number,
    school_No: String,
    teacher: String,
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "schools"
    },
    directorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "directors"
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "teachers"
    },
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true }))
