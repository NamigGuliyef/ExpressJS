import { model } from "mongoose";
import warehouseSchema from "../schema/warehouse.js";
export const warehouseModel = model('warehouse', warehouseSchema)
