import { model } from "mongoose";
import ProductSchema from "./schema.js";
const ProductModel = model('product', ProductSchema)
export default ProductModel;
