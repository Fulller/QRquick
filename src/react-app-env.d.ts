/// <reference types="react-scripts" />
declare module "*.png";
declare module "*.svg";
declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
