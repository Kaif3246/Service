import dbConnect from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";



dotenv.config()




  
dbConnect().then(
    await app.listen(process.env.PORT|| 6000,()=>{
   console.log(`server is running at port : ${process.env.PORT}`);
   })
)
.catch((error)=>{
    console.log("connection error",error)
});
