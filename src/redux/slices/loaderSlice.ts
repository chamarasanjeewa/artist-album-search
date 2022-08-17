import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  active: boolean;
}

const initialState = {
  active: false,
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    displayLoader: (state, action) => {
      state.active = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayLoader } = activeSlice.actions;
export default activeSlice.reducer;
