
// import { response } from "express";
import User from "../model/user-schema.js";

export const userSignup = async (request, response)=>{


    try{
        const exit =await User.findOne({username: request.body.username})
        if( exit){
            return response.status(401).json({message: 'Username already exist'});
        }

        const user = request.body;
        const newUser = User(user);
        await newUser.save();

        response.status(200).json({message:user})
     
    }catch(error){
        response.status(500).json({message: error.message})
    }
   
}

export const userLogin = async(request, response) =>{
    try {
        const username = request.body.username;
        const password = request.body.password;
        // console.log('bye');
        console.log("hleodfjskfak");
        // User.deleteMany({});
        
        let user = await User.findOne({username:username, password: password})
        // console.log('hello');
        if(user){
            return response.status(200).json({data: user})
        }else{
            return response.status(401).json('Invalid login')
        }
    } catch (error) {
        return response.status(500).json("Error", error.message);
    }
}