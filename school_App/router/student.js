import { Router } from "express";
import { allData, createdData, deletedData, getById, getByUniId, updateData } from "../controller/student.js";
const r = Router()

r.get('/', allData)
r.get('/university/:uniId', getByUniId)
r.get('/:Id', getById)
r.post('/', createdData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)

export default r