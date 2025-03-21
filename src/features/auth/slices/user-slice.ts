import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/entities/user/types/user-types';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

const userReducer = userSlice.reducer;

export const { setUser, clearUser } = userSlice.actions;
export default userReducer;
