import { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false })

const userModel = model('user', userSchema)
export default userModel