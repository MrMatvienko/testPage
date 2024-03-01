import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Додаткові налаштування можна додати тут, якщо потрібно
});

export default store;
