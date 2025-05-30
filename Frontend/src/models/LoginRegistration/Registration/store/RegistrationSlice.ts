// import {
//   rmbServices,
//   rmbServicesGet,
// } from "@assisted/common/src/store/services/rmbServices/rmbServices";
// import { hasItems } from "@assisted/common/src/utils/array/array";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
};

const RegistrationSlice = createSlice({
  name: "Registation",
  initialState,
  reducers: {
    unSetError: (state) => {
      state.error = null;
    },
    resetRegistrationData: () => initialState,
  },
  extraReducers: (builder) => {},
});

export default RegistrationSlice.reducer;

export const { unSetError, resetRegistrationData } = RegistrationSlice.actions;
