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


warehouseSchema.pre('findOneAndDelete', async function (next) {
    const warehouseId = this.getFilter()._id
    await mongoose.model('product').deleteMany({ warehouseId })
    next()
})

export default warehouseSchema