import { schoolModel } from "../model/school.js";

export const allData = async (req, res) => {
    const data = await schoolModel.find()
    res.send(data)
}
