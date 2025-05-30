import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices";

const reducerProxy = (state: any, action: any) => {
  return reducers(state, action);
};

const store = configureStore({
  reducer: reducerProxy,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// Export this dispatch type for usage in components
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    store: typeof store;
  }
}

window.store = store;
export default store;
