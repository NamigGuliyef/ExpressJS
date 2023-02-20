import { Schema } from "mongoose";
const ProductSchema = Schema({
    name: String,
    unit: String,
    quantity: Number,
    price: Number
}, { versionKey: false })
export default ProductSchema;
