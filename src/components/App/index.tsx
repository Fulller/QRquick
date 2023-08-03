import React, { FC, useEffect } from "react";
import ReactRouter from "../Router";

import { getUser } from "../../services/user.service";
import { useDispatch } from "react-redux";
import userSlide from "../../redux/slides/user.slide";
import "./variables.css";
import "./Global.scss";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const user = await getUser();
      dispatch(userSlide.actions.setUser(user));
    })();
  }, [dispatch]);
  return <ReactRouter></ReactRouter>;
};

export default App;
