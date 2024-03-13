import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: '',
  email: ''
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return state;
    },

    resetUser: (state) => {
      state = initialState;
      return state;
    }
  }
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
