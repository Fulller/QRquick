import { FC, useReducer, useEffect, useState } from "react";
import ShapeColors from "./component/BodyPatterns";
import { CustomQRCodeProps } from "../components/QRcode";
import EyePatterns from "./component/EyePatterns";
import QRCodePattern from "./component/QRCodePattern";
import { useParams } from "react-router-dom";
import { getQrcode } from "../../services/qrcode.service";
import _ from "lodash";
import "./GenerateQR.scss";
import { getValueQrcode } from "../../tools/url.tool";

const reducer = (state: CustomQRCodeProps, action: any): CustomQRCodeProps => {
  if (action?.name === "all") {
    return action.payload;
  }
  return { ...state, [action.key]: action.payload };
};
const GenerateQR: FC = () => {
  const { id } = useParams();
  const [qrProps, setStyleQR] = useReducer(reducer, {});
  const [qrCode, setQrcode] = useState(null);

  useEffect(() => {
    getQrcode(id)
      .then((qrCode) => {
        setQrcode(_.get(qrCode, "metadata"));
      })
      .catch(() => {
        setQrcode(null);
      });
  }, [id]);
  useEffect(() => {
    if (qrCode) {
      const value = getValueQrcode(_.get(qrCode, "_id"));
      const custom = _.chain(qrCode).get("custom").set("value", value).value();
      setStyleQR({ name: "all", payload: custom });
    } else {
      setStyleQR({ name: "all", payload: null });
    }
  }, [qrCode]);

  return (
    <main id="generateqr-page">
      {!!qrCode && !!qrProps ? (
        <>
          <div className="editor">
            <ShapeColors
              setStyleQR={setStyleQR}
              qrProps={qrProps}
            ></ShapeColors>
            <EyePatterns
              setStyleQR={setStyleQR}
              qrProps={qrProps}
            ></EyePatterns>
          </div>
          <div className="wrap-qrcode">
            <QRCodePattern qrCode={qrCode} qrProps={qrProps}></QRCodePattern>
          </div>
        </>
      ) : (
        <h1>Not found with</h1>
      )}
    </main>
  );
};
export default GenerateQR;
