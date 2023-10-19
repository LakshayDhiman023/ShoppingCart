import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async() => {
  try {
    
    await Product.insertMany(products);   
    console.log("Successfully inserted default data");
  } catch (error) {
    console.log("Error while importing default data", error.message); // Corrected this line
  }
};

export default DefaultData;
