import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/dbconnect.js";

dotenv.config({
    path: "../.env"
})

connectDB()
.then(() => {
    app.listen(PORT,()=>{
        console.log(`Server us listening on port: ${PORT}`);
    })
})
.catch((error) =>{
    console.error("MongoDB connection Failed!",error);
    process.exit(1);
});

const PORT = process.env.PORT || 8000;
