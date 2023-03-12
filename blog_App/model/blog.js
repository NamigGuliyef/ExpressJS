import mongoose, { model, Schema } from "mongoose";
const blogSchema = new Schema({
    title: String,
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
}, { versionKey: false })

const blogModel = model('blog', blogSchema)
export default blogModel