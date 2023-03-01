import { model, Schema } from "mongoose";
const phoneSchema = new Schema({
    model: String,
    RAM: String,
    memory: String,
    camera: String
})
const phoneModel = model('phone', phoneSchema)
export default phoneModel
