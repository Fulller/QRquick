import { configureStore } from "@reduxjs/toolkit";
import userSlide from "./slides/user.slide";
import settingSlide from "./slides/setting.slide";

export default configureStore({
  reducer: {
    user: userSlide.reducer,
    setting: settingSlide.reducer,
  },
});
