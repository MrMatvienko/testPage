import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateTheme = createAsyncThunk(
  'theme/theme',
  async (theme, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        'https://project-team-6-backend.onrender.com/api/users/themes',
        {
          theme: theme,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
