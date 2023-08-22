import { fileType } from "./fileType.const";
import { InputProps } from "../pages/Create/Input";
import Joi from "joi";

export enum InputName {
  LINK = "link",
  IMAGE = "image",
  AUDIO = "audio",
  PDF = "pdf",
  NAME = "name",
  PASSWORD = "password",
  SSID = "ssid",
  SECURITY_TYPE = "securityType",
}
export const inputsProps: InputProps[] = [
  {
    name: InputName.NAME,
    label: InputName.NAME,
    placeholder: "Name your QR",
    type: "text",
    optional: true,
    standardForAPI: InputName.NAME,
    defaultValue: "",
  },
  {
    name: InputName.LINK,
    label: InputName.LINK,
    placeholder: "Put your link here",
    type: "text",
    standardForAPI: "data." + InputName.LINK,
    defaultValue: "",
    validation: Joi.string().uri().required(),
  },
  {
    name: InputName.IMAGE,
    label: InputName.IMAGE,
    placeholder: "Upload Image",
    type: "file",
    fileType: fileType.Image,
    standardForAPI: "file",
  },
  {
    name: InputName.AUDIO,
    label: InputName.AUDIO,
    placeholder: "Upload Audio",
    type: "file",
    fileType: fileType.Audio,
    standardForAPI: "file",
  },
  {
    name: InputName.PDF,
    label: InputName.PDF,
    placeholder: "Upload PDF",
    type: "file",
    fileType: fileType.PDF,
    standardForAPI: "file",
  },
  {
    name: InputName.SECURITY_TYPE,
    label: "Security Type",
    type: "select",
    standardForAPI: "data." + InputName.SECURITY_TYPE,
    defaultValue: "WPA",
  },
  {
    name: InputName.SSID,
    label: InputName.SSID,
    placeholder: "Wifi name",
    type: "text",
    standardForAPI: "data." + InputName.SSID,
    defaultValue: "",
    validation: Joi.string().required(),
  },
  {
    name: InputName.PASSWORD,
    label: InputName.PASSWORD,
    placeholder: "Password for wi-fi",
    type: "text",
    standardForAPI: "data." + InputName.PASSWORD,
    defaultValue: "",
    validation: Joi.string().required().min(8).max(100),
  },
];
