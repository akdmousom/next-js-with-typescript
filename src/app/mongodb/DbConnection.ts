import mongoose from "mongoose";

export const MongoConnection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017')
        console.log("Database Connected With Mongoose!!!");
    } catch (error) {

        console.log("Something went wrong with Mongoose Connection");
        
    }
}