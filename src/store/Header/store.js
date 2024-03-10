import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { tasksSlice } from 'store/tasks/slice';
import { columnsSlice } from 'store/columns/slice';
import { boardsSlice } from 'store/boards/slice';
import { authReducer } from 'store/auth/slice';
import { filterSlice } from 'store/filter/slice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    columns: columnsSlice.reducer,
    boards: boardsSlice.reducer,
    auth: authReducer,
    filter: filterSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
