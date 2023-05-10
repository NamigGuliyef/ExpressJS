import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
}, { versionKey: false, timestamps: true })

export const noteModel = model('note', noteSchema)
