


import mongoose  from "mongoose";

 const Connection = async(username, password)=>{
    const URL =`mongodb+srv://LakshayDhiman:${password}@ecommerce.ccugrsn.mongodb.net/`
    
    try{
        mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log("Database is connected");

    }catch(error){
        console.log("Error while connecting to Sever ", error.message);
    }
}

export default Connection