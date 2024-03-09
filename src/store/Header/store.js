import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './Theme/slise';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
