import { Schema } from "mongoose";
const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
}, { versionKey: false })

export default clubSchema;
