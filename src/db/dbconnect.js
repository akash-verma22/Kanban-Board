import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB Connection failed!",error);
        process.exit(1);
    }
}

export default connectDB;