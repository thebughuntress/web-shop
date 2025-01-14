import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // For the shopping cart (with id and quantity)
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {

    // Action to add an article to the cart (only id and quantity)
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingArticle = state.cart.find((item) => item.id === id);
      if (existingArticle) {
        existingArticle.quantity += quantity;
      } else {
        state.cart.push({ id, quantity });
      }
    },

    // Action to add an article to the cart (only id and quantity)
    reduceQuantityOfArticleInCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingArticle = state.cart.find((item) => item.id === id);
      if (existingArticle) {
        existingArticle.quantity -= quantity;
      } else {
        state.cart.push({ id, quantity });
      }
    },
  },
});

export const { addToCart, reduceQuantityOfArticleInCart } = articleSlice.actions;
export default articleSlice.reducer;
