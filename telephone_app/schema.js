import { model, Schema } from "mongoose";
const phoneSchema = new Schema({
    model: String,
    ram: String,
    memory: String,
    camera: String,
    photo: String
}, { versionKey: false })
const phoneModel = model('phone', phoneSchema)
export default phoneModel
