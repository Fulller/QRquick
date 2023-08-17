import { getLS } from "../tools/localStorage.tool";
import _ from "lodash";

export function getHeaders(headerField: string[] = ["accesstoken"]) {
  const accesstoken = getLS("accesstoken", "");
  const refreshtoken = getLS("refreshtoken", "");
  return _.pick(
    {
      accesstoken,
      refreshtoken,
    },
    headerField
  );
}
