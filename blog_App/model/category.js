import { Schema, model } from "mongoose";
const categorySchema = new Schema({
    name: String
},{ versionKey: false })
const categoryModel = model('category', categorySchema)
export default categoryModel
