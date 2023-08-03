import { FC, useRef, RefObject } from "react";
import { CustomQRCodeProps } from "../../../components/QRcode";
import CustomQRCode from "../../../components/QRcode";
import _ from "lodash";
import "./QRCodePattern.scss";

import html2canvas from "html2canvas";

interface QRCodePatternProps {
  qrProps: CustomQRCodeProps;
  qrCode: any;
}
const QRCodePattern: FC<QRCodePatternProps> = ({ qrProps, qrCode }) => {
  const qrCodeContainer: RefObject<HTMLDivElement> = useRef(null);
  const downloadQRCode = () => {
    const qrCodeContainerRef = qrCodeContainer.current;
    if (!qrCodeContainerRef) {
      console.error("QR code container not found.");
      return;
    }
    html2canvas(qrCodeContainerRef).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = qrCode.name + "_qrcode.png";
      downloadLink.click();
    });
  };
  return (
    <div className="editor-feature" id="eye-patterns">
      <div className="qrcode">
        <span className="wrap-customqrcode" ref={qrCodeContainer}>
          <CustomQRCode {...qrProps}></CustomQRCode>
        </span>
        <button
          id="download-btn"
          className="button style1"
          onClick={downloadQRCode}
        >
          Download QR code
          <i className="fa-solid fa-download fa-bounce"></i>
        </button>
        <div className="info">
          <p className="info-item">
            <span>Name: </span>
            {_.get(qrCode, "name", "QR code")}
          </p>
          <p className="info-item">
            <span>Type: </span>
            {_.get(qrCode, "contentType")}
          </p>
          <p className="info-item">
            <span>Scans: </span>
            {_.get(qrCode, "totalScan", 0)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default QRCodePattern;
