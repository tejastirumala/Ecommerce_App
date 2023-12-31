import mongoose  from "mongoose";
import colors from "colors";
const connnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white
        );
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
};

export default connnectDB;