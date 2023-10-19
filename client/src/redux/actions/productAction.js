import axios from "axios";

const URL = 'http://localhost8000';


export const getProducts = () => async() =>{
    try {
        let response = await axios.get(`${URl}/products`) 
        console.log(response);
        
    } catch (error) {
        console.log("error while calling getProduct api", error.message);
    }
}