import _ from "lodash";

const apiUrl: string = _.get(
  process.env,
  "REACT_APP_API_URL",
  "http://localhost:8000/api/v1"
);
const authUrl: string = _.get(
  process.env,
  "REACT_APP_AUTH_URL",
  "http://localhost:8000"
);
const intervalRefreshToken: number =
  _.chain(process.env)
    .get("REACT_APP_INTERVAL_REFRESHTOKEN", "3600")
    .toNumber()
    .value() * 1000;

export { apiUrl, authUrl, intervalRefreshToken };
