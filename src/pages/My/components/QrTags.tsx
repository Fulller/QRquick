import { FC, useState, useEffect } from "react";
import QRCode from "../../components/QRcode";
import { getValueQrcode } from "../../../tools/url.tool";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
import OptionsBtn from "./OptionsBtn";
import "../My.scss";
import { deleteQRcodeById } from "../../../services/qrcode.service";
import { useText } from "../../../hooks";

interface QrsProps {
  qrs: any[];
}
const QrsTags: FC<QrsProps> = ({ qrs: qrsProp }) => {
  const [qrs, setQrs] = useState<any[]>([]);
  const text = useText();
  useEffect(() => {
    setQrs(qrsProp);
  }, [qrsProp]);
  const removeQr = async (id: string) => {
    try {
      await deleteQRcodeById(id);
      setQrs(
        _.map(qrs, (qr) => {
          if (qr._id === id) {
            qr.removed = true;
          }
          return qr;
        })
      );
      setTimeout(() => {
        setQrs(_.filter(qrs, (qr) => qr._id !== id));
        window.location.reload();
      }, 1000);
    } catch {
      console.error("Error when delete qr");
    }
  };
  return (
    <div className="qrs">
      {qrs.map((qr: any) => {
        const custom: any = _.chain(qr.custom)
          .set("value", getValueQrcode(qr))
          .set("size", 120)
          .value();
        const createdAt = moment(qr.createdAt).format("DD/MM/YYYY");
        return (
          <div key={qr._id} className={`qr ${qr.removed ? "removed" : ""}`}>
            <h3>{qr.name.replace("null", "QR code")}</h3>
            <div className="info">
              <div className="qrcode-info">
                <QRCode {...custom}></QRCode>
              </div>
              <div className="type-and-created">
                <p>
                  {text("Type")}:{" "}
                  <span>
                    {text(
                      _.chain(qr)
                        .get("contentType", "QR code")
                        .upperFirst()
                        .value()
                    )}
                  </span>{" "}
                </p>
                <p>
                  {text("Created")}: <span>{createdAt}</span>
                </p>
              </div>
              <div className="total-scan">
                <span className="material-symbols-outlined">
                  qr_code_scanner
                </span>
                <span>{text("Total scan")}</span>
                <span className="number">{qr.totalScan}</span>
              </div>
              <div className="actions">
                <Link to={"/generate/" + qr._id} className="button style1">
                  {text("Download")}
                  <i className="fa-solid fa-download fa-bounce"></i>
                </Link>
                <OptionsBtn id={qr._id} removeQr={removeQr}></OptionsBtn>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QrsTags;
