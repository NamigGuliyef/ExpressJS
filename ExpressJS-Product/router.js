import { Router } from "express";
import ProductModel from "./model.js";
const ProductRouter = Router()

ProductRouter.use((req, res, next) => {
    console.log('Products request atildi ....')
    next()
})


ProductRouter.get('/', async (req, res) => {
    const AllProducts = await ProductModel.find()
    res.send(AllProducts)
})


ProductRouter.get('/:id', async (req, res) => {
    const FoundID = await ProductModel.findOne({ _id: req.params.id })
    res.send(FoundID)
})


ProductRouter.post('/', async (req, res) => {
    const CreateProduct = await ProductModel.create(req.body)
    res.send(CreateProduct)
})


ProductRouter.put('/:id', async (req, res) => {
    const UpdateProduct = await ProductModel.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }, { new: true })
    res.send(UpdateProduct)
})


ProductRouter.delete('/:id', async (req, res) => {
    const DeletedProduct = await ProductModel.findOneAndDelete({ _id: req.params.id })
    res.send(req.params.id + " bazadan silindi!")
})


export default ProductRouter