import { configureStore } from "@reduxjs/toolkit";
import userSlide from "./slides/user.slide";
import settingSlide from "./slides/setting.slide";
import { setLS } from "../tools/localStorage.tool";

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  const state = store.getState();
  setLS("setting", state.setting);
  return result;
};
export default configureStore({
  reducer: {
    user: userSlide.reducer,
    setting: settingSlide.reducer,
  },
  middleware: [localStorageMiddleware],
});
