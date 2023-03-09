import { Router } from "express";
import authMiddleware from "./auth.js";
import { allData, deletedId, getById, updateData } from "./controller.js";
const r = Router()

r.get('/', allData)
r.get('/:Id', authMiddleware, getById)
r.put('/:Id', updateData)
r.delete('/:Id', deletedId)


export default r