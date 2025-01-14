import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],     // For the shopping cart (with id and quantity)
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // Action to add an article to the store (for listing articles)
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },

    // Action to add an article to the cart (only id and quantity)
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;

      // Check if the article already exists in the cart (by id)
      const existingArticle = state.cart.find((item) => item.id === id);
      
      if (existingArticle) {
        existingArticle.quantity += quantity; // Increment the quantity if already in cart
      } else {
        state.cart.push({ id, quantity }); // Add a new article with the id and quantity
      }
    },
  },
});

export const { addArticle, addToCart } = articleSlice.actions;
export default articleSlice.reducer;
