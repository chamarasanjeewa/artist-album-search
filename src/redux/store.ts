import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { artistsApi } from "./apiSlices/artistApiSlice";
import thunk from "redux-thunk";
import { baseApi } from "./apiSlices/baseApiSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  [artistsApi.reducerPath]: artistsApi.reducer,
});

const Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, baseApi.middleware],
});

export { Store };
