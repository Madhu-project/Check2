// import {
//   rmbServices,
//   rmbServicesGet,
// } from "@assisted/common/src/store/services/rmbServices/rmbServices";
// import { hasItems } from "@assisted/common/src/utils/array/array";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type LayoutState = {
  loading: boolean | null;
  error: string | null;
  component: string;
  pageHistory: any;
};

const initialState: LayoutState = {
  loading: null,
  error: null,
  component: "",
  pageHistory: { previousPage: null, presentPage: "" },
};
const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    loadComponent: (state, action) => {
      if (state.pageHistory.presentPage !== action.payload) {
        state.pageHistory.previousPage = state.pageHistory.presentPage;
        state.pageHistory.presentPage = action.payload;
        state.component = action.payload;
      }
      state.component = action.payload;
    },
    unSetError: (state) => {
      state.error = null;
    },
    resetLayoutData: () => initialState,
  },
  extraReducers: (builder) => {},
});

export default LayoutSlice.reducer;

export const { unSetError, resetLayoutData, loadComponent } =
  LayoutSlice.actions;
