import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'warehouse'
    }
}, { versionKey: false })


productSchema.post('save', async function () {
    await mongoose.model('warehouse').findOneAndUpdate({ _id: this.warehouseId }, {
        $push: { products: this._id }
    })
})


productSchema.pre('save', async function (next) {
    const isExist = await mongoose.model('product').findOne({ name: this.name })
    if (isExist) {
        console.log('Artiq mehsul yaradilib')
        process.exit(-1)
    }
    next()
})


productSchema.pre('findOneAndDelete', async function (next) {
    const deletedId = this.getFilter()._id
    const products = await mongoose.model('product').findOne({ _id: deletedId }).clone()
    await mongoose.model('warehouse').updateOne({ _id: products.warehouseId }, {
        $pull: { products: deletedId }
    })
    next()
})

export default productSchema