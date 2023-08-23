import { FC } from "react";
import Link from "../pages/Create/component/Link";
import Image from "../pages/Create/component/Image";
import Audio from "../pages/Create/component/Audio";
import PDF from "../pages/Create/component/PDF";
import Wifi from "../pages/Create/component/Wifi";
import Phone from "../pages/Create/component/Phone";
import Text from "../pages/Create/component/Text";

import { featureName } from "./featureName.const";

export interface Feature {
  title: string;
  icon: any;
  path: string;
  Component: FC;
}
export const features: Feature[] = [
  {
    title: featureName.LINK,
    icon: <i className="fa-solid fa-link"></i>,
    path: "/link",
    Component: Link,
  },
  {
    title: featureName.IMAGE,
    icon: <i className="fa-solid fa-image"></i>,
    path: "/image",
    Component: Image,
  },
  {
    title: featureName.AUDIO,
    icon: <i className="fa-solid fa-music"></i>,
    path: "/audio",
    Component: Audio,
  },
  {
    title: featureName.PDF,
    icon: <i className="fa-solid fa-file-pdf"></i>,
    path: "/pdf",
    Component: PDF,
  },
  {
    title: "Wi-Fi",
    icon: <i className="fa-solid fa-wifi"></i>,
    path: "/wifi",
    Component: Wifi,
  },
  {
    title: "Phone",
    icon: <i className="fa-solid fa-phone"></i>,
    path: "/phone",
    Component: Phone,
  },
  {
    title: "Text",
    icon: <i className="fa-solid fa-file-lines"></i>,
    path: "/text",
    Component: Text,
  },
];
