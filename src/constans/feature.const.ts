import { FC } from "react";
import Link from "../pages/Create/component/Link";
import Image from "../pages/Create/component/Image";
import Audio from "../pages/Create/component/Audio";
import PDF from "../pages/Create/component/PDF";
import Wifi from "../pages/Create/component/Wifi";
import linkIcon from "../images/features/link.svg";
import audioIcon from "../images/features/audio.svg";
import imageIcon from "../images/features/image.svg";
import pdfIcon from "../images/features/pdf.svg";
import wifiIcon from "../images/features/wifi.svg";

import { featureName } from "./featureName.const";

export interface Feature {
  title: string;
  icon: string;
  path: string;
  Component: FC;
}
export const features: Feature[] = [
  {
    title: featureName.LINK,
    icon: linkIcon,
    path: "/link",
    Component: Link,
  },
  {
    title: featureName.IMAGE,
    icon: imageIcon,
    path: "/image",
    Component: Image,
  },
  {
    title: featureName.AUDIO,
    icon: audioIcon,
    path: "/audio",
    Component: Audio,
  },
  {
    title: featureName.PDF,
    icon: pdfIcon,
    path: "/pdf",
    Component: PDF,
  },
  {
    title: "Wi-Fi",
    icon: wifiIcon,
    path: "/wifi",
    Component: Wifi,
  },
];
