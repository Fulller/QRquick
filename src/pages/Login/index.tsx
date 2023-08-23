import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setLS } from "../../tools/localStorage.tool";

const Login: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const accessToken: string | null = searchParams.get("accesstoken");
  const refreshToken: string | null = searchParams.get("refreshtoken");

  accessToken && setLS("accesstoken", accessToken);
  refreshToken && setLS("refreshtoken", refreshToken);

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <main id="login-page"></main>;
};

export default Login;
