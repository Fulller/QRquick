import { FC } from "react";
import { QRCode } from "react-qrcode-logo";

export interface CustomQRCodeProps {
  value?: string;
  ecLevel?: "L" | "M" | "Q" | "H";
  enableCORS?: boolean;
  size?: number;
  quietZone?: number;
  bgColor?: string;
  fgColor?: string;
  logoImage?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoOpacity?: number;
  logoOnLoad?: () => void;
  removeQrCodeBehindLogo?: boolean;
  logoPadding?: number;
  logoPaddingStyle?: "square" | "circle";
  qrStyle?: "squares" | "dots";
  eyeRadius?: any;
  eyeColor?: any;
}

const CustomQRCode: FC<CustomQRCodeProps> = ({
  value = "",
  ecLevel = "M",
  enableCORS = false,
  size = 200,
  quietZone = 12,
  bgColor = "#ffffff",
  fgColor = "#000000",
  logoImage,
  logoWidth = size * 0.2,
  logoHeight = logoWidth,
  logoOpacity = 1,
  logoOnLoad,
  removeQrCodeBehindLogo = false,
  logoPadding,
  logoPaddingStyle = "circle",
  qrStyle = "squares",
  eyeRadius = 12,
  eyeColor = "#000000",
}) => {
  return (
    <QRCode
      value={value}
      ecLevel={ecLevel}
      enableCORS={enableCORS}
      size={size}
      quietZone={quietZone}
      bgColor={bgColor}
      fgColor={fgColor}
      logoImage={logoImage}
      logoWidth={logoWidth}
      logoHeight={logoHeight}
      logoOpacity={logoOpacity}
      logoOnLoad={logoOnLoad}
      removeQrCodeBehindLogo={removeQrCodeBehindLogo}
      logoPadding={logoPadding}
      logoPaddingStyle={logoPaddingStyle}
      qrStyle={qrStyle}
      eyeRadius={eyeRadius}
      eyeColor={eyeColor}
    />
  );
};

export default CustomQRCode;
