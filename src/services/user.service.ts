import { getAuthUrl } from "../tools/url.tool";
import axios from "axios";
import { getLS } from "../tools/localStorage.tool";

axios.defaults.withCredentials = true;

export const getUser = () => {
  const accessToken = getLS("accesstoken", "");
  return axios
    .get(getAuthUrl("/user"), {
      withCredentials: true,
      headers: {
        accessToken,
      },
    })
    .then((data) => data.data.metadata.user)
    .catch((err) => null);
};
export const googleLogin = () => {
  return axios
    .get(getAuthUrl("/auth/google"))
    .then((data) => data)
    .catch((err) => null);
};
