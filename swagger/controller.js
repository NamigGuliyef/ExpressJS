import bookModel from "./bookSchema.js";

export const allBook = async (req, res) => {
    const allBook = await bookModel.find()
    res.send(allBook)
}

export const getBookId = async (req, res) => {
    const { id } = req.params
    const book = await bookModel.findOne({ _id: id })
    res.send(book)
}

export const createBook = async (req, res) => {
    const body = req.body
    const newBook = await bookModel.create(body)
    res.send(newBook)
}

export const updateBook = async (req, res) => {
    const body = req.body
    const { id } = req.params
    const updateBook = await bookModel.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
    res.send(updateBook)
}

export const deleteBook = async (req, res) => {
    const { id } = req.params
    const deleteBook = await bookModel.findOneAndDelete({ _id: id })
    res.send(deleteBook)
}
