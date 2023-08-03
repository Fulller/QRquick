import { apiUrl, authUrl } from "../configs";

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

const getValueQrcode = (id: string): string => {
  return getApiUrl("/qrcode/" + id);
};

export { getApiUrl, getAuthUrl, isNotURL, getValueQrcode };
