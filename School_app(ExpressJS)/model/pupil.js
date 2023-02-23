import mongoose, { model, Schema } from "mongoose";
export const pupilModel = model("pupil", Schema({
    name: String,
    surname: String,
    school_No: String,
    director: String,
    teacher: String,
    class: String,
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
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "classes"
    },
}, { versionKey: false, timestamps: true }))
