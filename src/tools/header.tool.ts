import { getLS } from "../tools/localStorage.tool";

export function getHeaders() {
  const accessToken = getLS("accesstoken", "");
  return {
    accessToken,
  };
}
