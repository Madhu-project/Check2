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

const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    unSetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {},
});

export default AdminSlice.reducer;

export const { unSetError } = AdminSlice.actions;
