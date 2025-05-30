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

const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    unSetError: (state) => {
      state.error = null;
    },

    resetProfileData: () => initialState,
  },
  extraReducers: (builder) => {},
});

export default ProfileSlice.reducer;

export const { unSetError, resetProfileData } = ProfileSlice.actions;
