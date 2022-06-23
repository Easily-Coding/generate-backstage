import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<string> = [];

const componentNamesSlice = createSlice({
  name: "componentNames",
  initialState,
  reducers: {
    initial(state, action: PayloadAction<Array<string>>) {
      return [...action.payload];
    },
  },
});

export const { initial } = componentNamesSlice.actions;
export default componentNamesSlice.reducer;
