import { connect } from "mongoose";
export const connectDB = () => {
    connect("mongodb+srv://node01:node01@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")
}
