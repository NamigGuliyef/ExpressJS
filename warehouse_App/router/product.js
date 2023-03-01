import { Router } from "express";
import { allDelete, createData, deletedData, getAll, getById, getProdByWarehouseId, updateData } from "../controller/product.js";
const r = Router()

r.use((req, res, next) => {
    console.log('/product request gonderildi!')
    next()
})


r.get('/', getAll)
r.get('/warehouse/:warehouseId', getProdByWarehouseId)
r.get('/:Id', getById)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)
r.delete('/', allDelete)

export default r