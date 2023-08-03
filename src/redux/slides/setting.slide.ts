import { createSlice } from "@reduxjs/toolkit";
import { getLS } from "../../tools/localStorage.tool";

export default createSlice({
  name: "setting",
  initialState: getLS("setting", null),
  reducers: {},
});
