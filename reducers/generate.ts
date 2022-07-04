import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { GenerateApis } from "apis";
import {PageBody} from "types/generate"

const initialState: { [key: string]: any } = {};

export const generateAddpage = createAsyncThunk("generate/addPage", async (data:PageBody) =>
  GenerateApis.generatePage()
);

const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {},
});

export default generateSlice.reducer;
