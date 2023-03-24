import { Router } from "express";
import { sign_in, sign_up } from "../controller/account.js";
const r = Router()

r.post('/sign-up',sign_up)
r.post('/sign-in', sign_in)

export default r
