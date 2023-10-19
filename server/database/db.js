
import mongoose  from "mongoose";

export const Connection = async(username, password)=>{
    const URL =
      `mongodb+srv://${username}:${password}@ecommerce-web.2a6kdgr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
    try{
        mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database is connected");

    }catch(error){
        console.log("Error while connecting to Sever ", error.message);
    }
}