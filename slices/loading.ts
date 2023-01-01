import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface LoadingState {
  value: boolean;
}

// Define the initial state using that type
const initialState: LoadingState = {
  value: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<LoadingState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoading = (state: RootState) => state.loadingReducer.value;

export default loadingSlice.reducer;
