import { FC, useRef, RefObject } from "react";
import { CustomQRCodeProps } from "../../../components/QRcode";
import CustomQRCode from "../../../components/QRcode";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import _ from "lodash";
import "./QRCodePattern.scss";
import { editCustom } from "../../../../services/qrcode.service";
import { notification } from "antd";

interface QRCodePatternProps {
  qrProps: CustomQRCodeProps;
  qrCode: any;
  hasChange: boolean;
  setHasChange: any;
}
const QRCodePattern: FC<QRCodePatternProps> = ({
  qrProps,
  qrCode,
  hasChange,
  setHasChange,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const qrCodeContainer: RefObject<HTMLDivElement> = useRef(null);
  const handleDownloadQR = () => {
    const element = qrCodeContainer.current;
    if (!element) return;
    domtoimage
      .toBlob(element, { width: 264, height: 264 })
      .then(function (blob: any) {
        saveAs(blob, `${qrCode.name.replace(" ", "_")}_QR.png`);
      })
      .catch(function (error: any) {
        console.error("Error:", error);
      });
  };
  const handleSaveChange = async () => {
    await editCustom(qrProps);
    setHasChange(false);
    openNotification();
  };
  const openNotification = () => {
    api.open({
      message: "Saved change custom",
      icon: <i className="fa-solid fa-check"></i>,
      duration: 5,
    });
  };
  return (
    <div className="editor-feature" id="eye-patterns">
      {contextHolder}
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
        <button
          id="save-change-btn"
          className={`button ${hasChange ? "has-change" : ""}`}
          onClick={handleSaveChange}
        >
          Save change
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <div className="info">
          <p className="info-item">
            <span>Name: </span>
            {_.get(qrCode, "name", "QR code")}
          </p>
          <p className="info-item">
            <span>Type: </span>
            {_.chain(qrCode).get("contentType", "QR code").upperFirst().value()}
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
