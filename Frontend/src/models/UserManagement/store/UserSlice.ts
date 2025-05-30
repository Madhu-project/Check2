import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MsServices from "../../../api/services";
import { ErrorResponse } from "../../../api/ErrorResponse";

interface UserState {
  usersList: any[];
  loading: boolean;
  error: ErrorResponse | null;
}

const initialState: UserState = {
  usersList: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("getUsers", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/employees/getAllUsersList`;
  return await MsServices({ url, data }, { rejectWithValue, method: "GET" });
});

const UserSlice = createSlice({
  name: "UserManagement",
  initialState,
  reducers: {
    resetUserManagementData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || null;
    });
  },
});

export default UserSlice.reducer;

export const { resetUserManagementData } = UserSlice.actions;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import MsServices from "../../../api/services";

// const initialState = {
//   usersList: [],
//   loading: false,
//   error: null as string | null,
// };

// export const getUsers = createAsyncThunk(
//   "getUsers",
//   async (data: Record<string, any> | undefined, { rejectWithValue }) => {
//     const url = `http://localhost:8080/api/employees/getAllUsersList`;

//     const response = await MsServices(
//       { url, data },
//       { rejectWithValue, method: "GET" }
//     );
//     return response;
//   }
// );

// const UserSlice = createSlice({
//   name: "UserManagement",
//   initialState,
//   reducers: {
//     resetUserManagementData: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getUsers.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });

//     builder.addCase(getUsers.fulfilled, (state, action) => {
//       const responseData = action?.payload;
//       state.loading = false;
//       state.usersList = responseData;
//       state.error = null;
//     });

//     builder.addCase(getUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export default UserSlice.reducer;

// export const { resetUserManagementData } = UserSlice.actions;
