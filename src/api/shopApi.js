import axios from "axios";

// Replace with your actual API base URL
const BASE_URL = "http://localhost:3030/shop"; 

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};