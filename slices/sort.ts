import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface SortState {
  value: {
    column:
      | "dex_number"
      | "hp"
      | "attack"
      | "defense"
      | "special_attack"
      | "special_defense"
      | "speed"
      | "base_stats_total";
    direction: "asc" | "desc";
  };
}

// Define the initial state using that type
const initialState: SortState = {
  value: { column: "dex_number", direction: "asc" },
};

export const sortSlice = createSlice({
  name: "sort",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSort = (state: RootState) => state.sortReducer.value;
export type SortColumn = SortState["value"]["column"];
export type SortDirection = SortState["value"]["direction"];

export default sortSlice.reducer;
