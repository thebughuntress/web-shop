import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    articles: articleReducer,
    category: categoryReducer,
  },
});

export default store;
