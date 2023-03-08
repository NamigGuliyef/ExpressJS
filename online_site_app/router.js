import { Router } from "express";
import { allData, createData, deletedId, getById, updateData } from "./controller.js";
const r = Router()

r.get('/', allData)
r.get('/:Id', getById)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedId)


export default r