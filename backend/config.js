// bring in the mongoose library for an easier database connection
import mongoose from "mongoose";

// create a function for more control of when the connection happens
async function connectDB() {
    try {
        // establish connection using the mongodb connection string (hidden in an environment variable)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected')
    } catch(e) {
        console.log(e)
    }
}

export default connectDB