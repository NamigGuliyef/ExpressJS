import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    email: {
        type: String,
        unique: true
    },
    password: String
}, { versionKey: false })

const userModel = model('user', userSchema)
export default userModel
