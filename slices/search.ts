import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface SearchState {
  value: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "generation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<SearchState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.searchReducer.value;

export default searchSlice.reducer;
