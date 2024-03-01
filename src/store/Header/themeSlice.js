import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'John Doe',
    avatar: 'path/to/default/avatar.png',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setUserTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { updateUser, setUserTheme } = userSlice.actions;
export const selectUser = state => state.user.user;
export const selectTheme = state => state.user.theme;

export default userSlice.reducer;
