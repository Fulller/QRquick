import { getAuthUrl } from "../tools/url.tool";
import axios from "axios";

axios.defaults.withCredentials = true;

export const getUser = () => {
  return axios
    .get(getAuthUrl("/user"))
    .then((data) => data.data.metadata.user)
    .catch((err) => null);
};
