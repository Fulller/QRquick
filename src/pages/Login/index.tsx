import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get("accessToken");
  if (accessToken) {
    console.log("dodo");
    Cookies.set("accessToken", accessToken, { expires: 1 });
  }
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return (
    <main id="login-page">
      <h1>Login Page</h1>
      {accessToken && <p>Access Token: {accessToken}</p>}
    </main>
  );
};

export default Login;
