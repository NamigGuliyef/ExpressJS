import { Router } from "express";
import { getAll, getByID } from "../controller/teacher.js";
import { teachModel } from "../model/teacher.js";
const r = Router()

r.get('/', getAll)
r.get('/:Id', getByID)

export default r