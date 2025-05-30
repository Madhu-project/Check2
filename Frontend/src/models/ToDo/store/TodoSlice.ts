import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MsServices from "../../../api/services";
import { ErrorResponse } from "../../../api/ErrorResponse";

interface TodoState {
  todoList: any[];
  loading: boolean;
  error: ErrorResponse | null;
  taskList: any[];
  updateSelect: any[];
  updateList: any[];
  removeItem: string;
  completeItem: any[];
  inCompleteItem: any[];
}

const initialState: TodoState = {
  todoList: [],
  error: null,
  loading: false,
  taskList: [],
  updateSelect: [],
  updateList: [],
  removeItem: "",
  completeItem: [],
  inCompleteItem: [],
};

// export const getTodos = createAsyncThunk(
//   "getTodos",
//   async (data, { dispatch, rejectWithValue }) => {
//     const requestData = JSON.stringify(data);
//     const url = `http://localhost:8080/api/todos/getAllTodoList`;
//     const response = await MsServices(
//       { url, data: requestData },
//       { rejectWithValue, method: "get" }
//     );
//     return response;
//   }
// );

export const getTodos = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("getTodos", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/getAllTodoList`;
  return await MsServices({ url, data }, { rejectWithValue, method: "GET" });
});

export const addTask = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("addTask", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/addTodo`;
  return await MsServices({ url, data }, { rejectWithValue, method: "POST" });
});

export const updateTask = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("updateTask", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/updateTodo`;
  return await MsServices({ url, data }, { rejectWithValue, method: "PUT" });
});

export const removeTask = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("removeTask", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/deleteTodo`;
  return await MsServices({ url, data }, { rejectWithValue, method: "DELETE" });
});

export const completeTask = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("completeTask", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/markComplete`;
  return await MsServices({ url, data }, { rejectWithValue, method: "PATCH" });
});

export const inCompleteTask = createAsyncThunk<
  any,
  Record<string, any> | undefined,
  {
    rejectValue: ErrorResponse;
  }
>("inCompleteTask", async (data, { rejectWithValue }) => {
  const url = `http://localhost:8080/api/todos/markIncomplete`;
  return await MsServices({ url, data }, { rejectWithValue, method: "PATCH" });
});

const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    unSetError: (state) => {
      state.error = null;
    },
    updateState: (state, action) => {
      state.updateSelect = action.payload;
    },
    resetDeleteTaskData: (state) => {
      state.removeItem = "";
    },
    resetTickMarkData: (state) => {
      state.completeItem = [];
      state.inCompleteItem = [];
    },

    resetToDoData: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.todoList = responseData;
    });

    builder.addCase(getTodos.rejected, (state) => {
      state.loading = false;
    });

    // ADD TASK

    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addTask.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.taskList = responseData;
    });

    builder.addCase(addTask.rejected, (state) => {
      state.loading = false;
    });

    // update Task
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateTask.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.updateList = responseData;
    });

    builder.addCase(updateTask.rejected, (state) => {
      state.loading = false;
    });

    // Delete Task
    builder.addCase(removeTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(removeTask.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.removeItem = responseData;
    });

    builder.addCase(removeTask.rejected, (state) => {
      state.loading = false;
    });

    //mark Complete
    builder.addCase(completeTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(completeTask.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.completeItem = responseData;
    });

    builder.addCase(completeTask.rejected, (state) => {
      state.loading = false;
    });

    // mark incomplete
    builder.addCase(inCompleteTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(inCompleteTask.fulfilled, (state, action) => {
      const responseData = action?.payload;
      state.loading = false;
      state.inCompleteItem = responseData;
    });

    builder.addCase(inCompleteTask.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default TodoSlice.reducer;

export const {
  unSetError,
  resetToDoData,
  updateState,
  resetDeleteTaskData,
  resetTickMarkData,
} = TodoSlice.actions;
