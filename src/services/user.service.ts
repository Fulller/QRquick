import { getAuthUrl } from "../tools/url.tool";
import axios from "axios";
import { getHeaders } from "../tools/header.tool";

export const getUser = () => {
  return axios
    .get(getAuthUrl("/profile"), {
      withCredentials: true,
      headers: getHeaders(),
    })
    .then((data) => data.data.metadata.profile)
    .catch((err) => null);
};
