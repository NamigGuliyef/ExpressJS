import { model } from "mongoose";
import EmployeeSchema from "../schema/employee.js";
const EmployeeModel = model('employee', EmployeeSchema)
export default EmployeeModel