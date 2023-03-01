import { Router } from "express";
import { createData, deletedData, getAll, getById, updateData } from "../controller/warehouse.js";
const r = Router()

r.use((req, res, next) => {
    console.log('/warehouse request gonderildi!')
    next()
})


r.get('/', getAll)
r.get('/:Id', getById)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)

export default r