import mongoose, { model, Schema } from "mongoose";
const productSchema = new Schema({
    name: String,
    type: String,
    price: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, { versionKey: false })

const productModel = model('product', productSchema)
export default productModel
