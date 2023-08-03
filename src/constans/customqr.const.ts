import { CustomQRCodeProps } from "../pages/components/QRcode";

export const customQRCodeProps: CustomQRCodeProps = {
  value: "https://reactjs.org/",
  ecLevel: "M",
  enableCORS: false,
  size: 200,
  quietZone: 12,
  bgColor: "#ffffff",
  fgColor: "#000000",
  logoOpacity: 1,
  removeQrCodeBehindLogo: false,
  logoPaddingStyle: "square",
  qrStyle: "squares",
  eyeRadius: 12,
  eyeColor: "#000000",
};
