import { createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "../../store/store";

type TAuthState = {
  user: null | object;
  token: null | object;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: Rootstate) => state.auth.token;
export const useCurrentUser = (state: Rootstate) => state.auth.user;
