import mongoose, { model, Schema } from "mongoose";

const schoolSchema = new Schema({
    school_No: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    director: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "directors"
    }],
    teacher: [mongoose.ObjectId],
    class: [mongoose.ObjectId],
    pupil: [mongoose.ObjectId]
}, { versionKey: false, timestamps: true })


export const schoolModel = model('school', schoolSchema)


// schoolSchema.pre('save',(next)=>{

// })