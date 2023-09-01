import { createSlice } from "@reduxjs/toolkit";
import { getLS } from "../../tools/localStorage.tool";
import _ from "lodash";
import { settingInitState } from "../../constans/setting.init.const";

export default createSlice({
  name: "setting",
  initialState: getLS("setting", settingInitState),
  reducers: {
    setLanguage: (state, action) => {
      return _.set(state, "language", action.payload);
    },
  },
});
