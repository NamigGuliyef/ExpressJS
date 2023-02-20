import { model } from "mongoose";
import DepartmentSchema from "../schema/department.js";
const DepartmentModel = model('department', DepartmentSchema)
export default DepartmentModel
