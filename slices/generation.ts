import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface GenerationState {
  value: number | string;
}

// Define the initial state using that type
const initialState: GenerationState = {
  value: "",
};

export const generationSlice = createSlice({
  name: "generation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGeneration: (state, action: PayloadAction<GenerationState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setGeneration } = generationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGeneration = (state: RootState) =>
  state.generationReducer.value;

export default generationSlice.reducer;
