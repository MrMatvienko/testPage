import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

export const updateTheme = createAsyncThunk(
  'auth/theme',
  async ({ theme }, thunkAPI) => {
    try {
      const { data } = await axios.patch('/api/users/themes', { theme });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
