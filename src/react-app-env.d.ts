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
declare module "js-cookie" {
  export function get(key: string): string | undefined;
  export function set(key: string, value: string, options?: any): void;
}
declare module "dom-to-image" {
  const domtoimage: any;
  export default domtoimage;
}
declare module "file-saver" {
  export const saveAs: any;
}
