import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Fetch all posts
export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Fetch a single post by ID
export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
