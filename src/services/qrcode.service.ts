import { getApiUrl } from "../tools/url.tool";
import axios from "axios";
import FormData from "form-data";
import _ from "lodash";

axios.defaults.withCredentials = true;

export const createQrcode = async (qrcodeData: any) => {
  try {
    const formData = new FormData();
    _.forEach(qrcodeData, (value, key) => {
      formData.append(key, value);
    });
    const response = await axios.post(getApiUrl("/qrcode/create"), formData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getQrcode = async (id: string = "") => {
  try {
    const response = await axios.get(getApiUrl("/qrcode/custom/" + id));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getQRcodeByOwner = async () => {
  try {
    const response = await axios.get(getApiUrl("/qrcode/owner"));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteQRcodeById = async (id: string) => {
  try {
    const response = await axios.delete(getApiUrl("/qrcode/" + id));
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
