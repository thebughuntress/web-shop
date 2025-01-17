import axios from "axios";

// Replace with your actual API base URL
const BASE_URL = "https://my-json-server.typicode.com/thebughuntress/web-shop";

/**
 * Fetch all articles.
 * @returns {Promise<Object[]>} List of articles.
 * @throws Will throw an error if the request fails.
 */
export const getArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error?.response?.data || error.message);
    throw new Error("Failed to fetch articles. Please try again later.");
  }
};

/**
 * Fetch a single article by ID.
 * @param {number|string} id - The ID of the article to fetch.
 * @returns {Promise<Object>} The article data.
 * @throws Will throw an error if the request fails or the article is not found.
 */
export const getArticleById = async (id) => {
  if (!id) {
    throw new Error("Article ID is required to fetch article details.");
  }

  try {
    const response = await axios.get(`${BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error?.response?.data || error.message);
    throw new Error(`Failed to fetch article with ID: ${id}. Please try again later.`);
  }
};
