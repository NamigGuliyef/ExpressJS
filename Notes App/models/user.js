import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { versionKey: false, timestamps: true })

export const userModel = model('user', userSchema)