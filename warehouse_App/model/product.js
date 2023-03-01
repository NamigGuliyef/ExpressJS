import { model } from "mongoose";
import productSchema from "../schema/product.js";
export const productModel = model('product', productSchema)