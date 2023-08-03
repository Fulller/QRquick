import { fileType } from "./fileType.const";
import { InputProps } from "../pages/Create/Input";
import { featureName } from "./featureName.const";

export const inputsProps: InputProps[] = [
  {
    name: featureName.LINK,
    placeholder: "Put your link here",
  },
  {
    name: featureName.IMAGE,
    placeholder: "Upload Image",
    type: "file",
    fileType: fileType.Image,
  },
  {
    name: featureName.AUDIO,
    placeholder: "Upload Audio",
    type: "file",
    fileType: fileType.Audio,
  },
  {
    name: featureName.PDF,
    placeholder: "Upload PDF",
    type: "file",
    fileType: fileType.PDF,
  },
  {
    name: "Name",
    placeholder: "Name your QR",
    optional: true,
  },
];
