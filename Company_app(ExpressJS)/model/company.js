import { model } from "mongoose";
import CompanySchema from "../schema/company.js";
const CompanyModel = model('company', CompanySchema)
export default CompanyModel

