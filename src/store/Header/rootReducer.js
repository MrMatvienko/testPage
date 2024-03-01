import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeReducer from './themeSlice';
// Імпортуйте інші slices, якщо вони є

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  // Додайте інші slices тут, якщо вони є
});

export default rootReducer;
