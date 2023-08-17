import React, { FC, useEffect } from "react";
import ReactRouter from "../Router";

import { getUser, refreshToken } from "../../services/user.service";
import { useDispatch } from "react-redux";
import { intervalRefreshToken } from "../../configs";
import userSlide from "../../redux/slides/user.slide";
import "./variables.css";
import "./Global.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        await refreshToken();
        const user = await getUser();
        if (user) {
          let intervalId = setInterval(async () => {
            try {
              await refreshToken();
            } catch {
              dispatch(userSlide.actions.setUser(null));
              clearInterval(intervalId);
            }
          }, intervalRefreshToken);
        }
        dispatch(userSlide.actions.setUser(user));
      } catch {
        dispatch(userSlide.actions.setUser(null));
      }
    })();
  }, [dispatch]);
  return <ReactRouter></ReactRouter>;
};

export default App;
