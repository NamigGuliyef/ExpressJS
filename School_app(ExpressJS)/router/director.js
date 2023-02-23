import { Router } from "express";
import { createData, deletedData, getAll, getById, getBySchoolId, updateData } from "../controller/director.js";
import { directorModel } from "../model/director.js";
const r = Router()


r.use((req, res, next) => {
    console.log('/directors request atildi!')
    next()
})

r.get('/', getAll)
r.get('/:Id', getById)
r.get('/schools/:schoolID', getBySchoolId)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)


export default r