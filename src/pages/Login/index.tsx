import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setLS } from "../../tools/localStorage.tool";

const Login: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get("accesstoken");
  const refreshToken = searchParams.get("refreshtoken");
  if (accessToken) {
    setLS("accesstoken", accessToken);
    setLS("refreshtoken", refreshToken);
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
