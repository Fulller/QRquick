import { FC, useRef, RefObject } from "react";
import { CustomQRCodeProps } from "../../../components/QRcode";
import CustomQRCode from "../../../components/QRcode";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import _ from "lodash";
import "./QRCodePattern.scss";

interface QRCodePatternProps {
  qrProps: CustomQRCodeProps;
  qrCode: any;
}
const QRCodePattern: FC<QRCodePatternProps> = ({ qrProps, qrCode }) => {
  const qrCodeContainer: RefObject<HTMLDivElement> = useRef(null);
  const handleDownloadQR = () => {
    const element = qrCodeContainer.current;
    if (!element) return;
    domtoimage
      .toBlob(element)
      .then(function (blob: any) {
        saveAs(blob, "downloaded-image.png");
      })
      .catch(function (error: any) {
        console.error("Error:", error);
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
          onClick={handleDownloadQR}
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
