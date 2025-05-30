// import {
//   rmbServices,
//   rmbServicesGet,
// } from "@assisted/common/src/store/services/rmbServices/rmbServices";
// import { hasItems } from "@assisted/common/src/utils/array/array";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default LoginSlice.reducer;

export const { setUserLoggedIn } = LoginSlice.actions;
