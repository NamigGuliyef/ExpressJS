import { Router } from "express";
import { getData, getById, createData, updateData, deletedData } from "../controller/school.js";
const r = Router()

r.use((req, res, next) => {
    console.log('/schools request atildi !')
    next()
})

r.get('/', getData)
r.get('/:Id', getById)
r.post('/', createData)
r.put('/:Id', updateData)
r.delete('/:Id', deletedData)


export default r