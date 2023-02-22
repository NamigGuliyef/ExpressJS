import { Router } from "express";
import { allData } from "../controller/school.js";
import { schoolModel } from "../model/school.js";
const r = Router()


r.use((req, res, next) => {
    res.send('Schools request atildi !')
    next()
})


r.get('/', allData)


export default r