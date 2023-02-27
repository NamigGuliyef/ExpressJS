import { model } from "mongoose"
import clubSchema from "../schema/index.js"
export const clubModel = model('club', clubSchema)
