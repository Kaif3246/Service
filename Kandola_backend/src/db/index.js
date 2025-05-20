import mongoose from "mongoose";
const dbConnect = async () =>{
    try {

       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb error",error);
        process.exit(1)
    }

}
export  default dbConnect;