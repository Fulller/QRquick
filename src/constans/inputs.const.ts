import { fileType } from "./fileType.const";
import { InputProps } from "../pages/Create/Input";
import Joi from "joi";
import _ from "lodash";

export enum InputName {
  LINK = "link",
  IMAGE = "image",
  AUDIO = "audio",
  PDF = "pdf",
  NAME = "name",
  PASSWORD = "password",
  SSID = "ssid",
  SECURITY_TYPE = "securityType",
  PHONE_NUMBER = "phoneNumber",
  TEXT_EDITOR = "textEditor",
}
export const inputsProps: InputProps[] = [
  {
    name: InputName.NAME,
    label: InputName.NAME,
    placeholder: "Name placeholder",
    type: "text",
    optional: true,
    standardForAPI: InputName.NAME,
    defaultValue: "",
  },
  {
    name: InputName.LINK,
    label: InputName.LINK,
    placeholder: "Link placeholder",
    type: "text",
    standardForAPI: "data." + InputName.LINK,
    defaultValue: "",
    validation: Joi.string()
      .custom((value, helpers) => {
        const urlPattern =
          /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        if (!urlPattern.test(value)) {
          return helpers.error("isLink");
        }
        return value;
      })
      .required()
      .messages({
        isLink: "Incorrect link",
      }),
  },
  {
    name: InputName.IMAGE,
    label: InputName.IMAGE,
    placeholder: "Image placeholder",
    type: "file",
    fileType: fileType.Image,
    standardForAPI: "file",
  },
  {
    name: InputName.AUDIO,
    label: InputName.AUDIO,
    placeholder: "Audio placeholder",
    type: "file",
    fileType: fileType.Audio,
    standardForAPI: "file",
  },
  {
    name: InputName.PDF,
    label: InputName.PDF,
    placeholder: "PDF placeholder",
    type: "file",
    fileType: fileType.PDF,
    standardForAPI: "file",
  },
  {
    name: InputName.SECURITY_TYPE,
    label: "Security type",
    type: "select",
    standardForAPI: "data." + InputName.SECURITY_TYPE,
    defaultValue: "WPA",
    valuesForSelect: [
      { value: "WPA", title: "WPA" },
      { value: "WEP", title: "WEP" },
      { value: "nopass", title: "No pass" },
    ],
  },
  {
    name: InputName.SSID,
    label: "SSID",
    placeholder: "SSID placeholder",
    type: "text",
    standardForAPI: "data." + InputName.SSID,
    defaultValue: "",
    validation: Joi.string().max(100).required(),
  },
  {
    name: InputName.PASSWORD,
    label: "Password",
    placeholder: "Password placeholder",
    type: "text",
    standardForAPI: "data." + InputName.PASSWORD,
    defaultValue: "",
    validation: Joi.string().required().min(8).max(100),
  },
  {
    name: InputName.PHONE_NUMBER,
    label: "Phone",
    placeholder: "Phone placeholder",
    type: "text",
    defaultValue: "",
    standardForAPI: "data." + InputName.PHONE_NUMBER,
    validation: Joi.string()
      .custom((value, helpers) => {
        if (value.toString().length > 12) {
          return helpers.error("string.maxLength");
        }
        if (!_.toNumber(value)) {
          return helpers.error("number.invalid");
        }
        return value;
      })
      .messages({
        "number.invalid": "Invalid phone number",
        "string.maxLength": "The maximum length of a phone number is 12",
      }),
  },
  {
    name: InputName.TEXT_EDITOR,
    label: "Text Editor",
    placeholder: "Text Editor placehoder",
    type: "text-editor",
    defaultValue: "",
    standardForAPI: "data." + InputName.TEXT_EDITOR,
  },
];
