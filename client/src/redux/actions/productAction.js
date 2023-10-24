import axios from "axios";
import * as actionTypes from '../constants/productConstant'
const URL = 'http://localhost:8000';


export const getProducts = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/products`) 
        // console.log(response);
        
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
        
    } catch (error) {
        console.log("error while calling getProduct api", error.message);
        dispatch({type: actionTypes.GET_PRODUCRS_FAIL, payload: error.message})
    }
}