import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

const selectUser = (state) => state.auth.user;
const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export { selectUser, selectIsAuthenticated };

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
