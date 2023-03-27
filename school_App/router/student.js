import { Router } from "express";
import { allData, createdData, deletedData, getById, getByUniId, updateData } from "../controller/student.js";
import StudentValidation from "../validation.js";
import { validate } from 'express-validation'
const r = Router()

r.get('/', allData)
r.get('/university/:uniId', getByUniId)
r.get('/:Id', getById)
r.post('/', validate(StudentValidation.createOrUpdateStudent), createdData)
r.put('/:Id', validate(StudentValidation.createOrUpdateStudent),updateData)
r.delete('/:Id', deletedData)

export default r