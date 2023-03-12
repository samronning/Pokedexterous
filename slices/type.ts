import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeName } from "../components/Type/Types";
import type { RootState } from "../store";

// Define a type for the slice state
interface TypeState {
  value: { type1: TypeName; type2: TypeName };
}

// Define the initial state using that type
const initialState: TypeState = {
  value: { type1: "none", type2: "none" },
};

export const typeSlice = createSlice({
  name: "type",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TypeState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectType = (state: RootState) => state.typeReducer.value;

export default typeSlice.reducer;
