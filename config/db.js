import mongoose, { mongo } from "mongoose";
import colors from "colors"
const connectDB = async ()=>
    {
        try{
                const conn = await mongoose.connect(process.env.MONGO_URL);
                console.log(`Connected to Database ${conn.connection.host}`.bgGreen);
        }
        catch(error){
                console.log(`Error is monogo ${error}`.bgRed.white);
        }
    }

    export default connectDB;