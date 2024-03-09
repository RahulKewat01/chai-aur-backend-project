import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:"./env"
})




connectDB()








//************First Approch to connect Db in mongo */

/*import { Express } from "express"
export const DB_NAME = "Chai Aur code"


(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL/$DB_NAME}`)
       application.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })

    }catch(error){
        console.log("ERROR:", error)
        throw error
    }
})*/