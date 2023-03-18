import { model, Schema } from "mongoose";



const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { versionKey: false })

const bookModel = model('book', bookSchema)
export default bookModel;
