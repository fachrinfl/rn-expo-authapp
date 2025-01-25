import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

const initialState: User = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    removeUser: (state) => {
      state.email = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
