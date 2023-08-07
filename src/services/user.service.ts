import { getAuthUrl } from "../tools/url.tool";
import axios from "axios";

axios.defaults.withCredentials = true;

export const getUser = () => {
  return axios
    .get(getAuthUrl("/user"), { withCredentials: true })
    .then((data) => data.data.metadata.user)
    .catch((err) => null);
};
export const googleLogin = () => {
  return axios
    .get(getAuthUrl("/auth/google"))
    .then((data) => data)
    .catch((err) => null);
};
