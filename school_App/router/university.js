import { Router } from "express";
import { allData, createData, deletedData, getById, updateData } from "../controller/university.js";
const r = Router()

r.get('/', allData )
r.get('/:Id', getById)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)


export default r