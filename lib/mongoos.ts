import mongoose from "mongoose";

let isConnected = false

export async function connectToDB(){

    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URL){
     return console.log('Missing MongoDB url')
    }

    if(isConnected){
        return console.log('MongoDB connection already Established')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected =true
        console.log('MongoDB Connected')
    } catch (error: any) {
        console.log(`Error connecting to database ${error.message}`)
    }

}