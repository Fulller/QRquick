import { apiUrl, authUrl } from "../configs";
import { featureName } from "../constans/featureName.const";
import _ from "lodash";

function isNotURL(str: string) {
  const urlRegex =
    /^(?:(?:(?:https?|ftp):)?\/\/)?(?:[\w.-]+?\.[a-z]{2,}|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:[/\\?#][^\s]*)?$/i;
  return !urlRegex.test(str);
}
const getApiUrl = (path: string): string => {
  return `${apiUrl}${path}`;
};

const getAuthUrl = (path: string): string => {
  return `${authUrl}${path}`;
};

const getValueQrcode = (qrCode: any): string => {
  let value: string;
  switch (_.get(qrCode, "contentType")) {
    case featureName.WIFI: {
      const { ssid, securityType, password } = _.get(qrCode, "content.data");
      value = `WIFI:S:${ssid};T:${securityType};P:${password};;`;
      break;
    }
    default:
      value = getApiUrl("/qrcode/" + _.get(qrCode, "_id"));
  }
  return value;
};

export { getApiUrl, getAuthUrl, isNotURL, getValueQrcode };
