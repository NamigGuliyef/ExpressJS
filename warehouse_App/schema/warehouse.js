import mongoose, { Schema } from "mongoose";
const warehouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    responsible_person: {
        type: String,
        required: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'product'
    }
}, { versionKey: false })

export default warehouseSchema