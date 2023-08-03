import { FC } from "react";
import QRCode from "../../components/QRcode";
import { getValueQrcode } from "../../../tools/url.tool";
import _ from "lodash";
import moment from "moment";
import { Link } from "react-router-dom";
import OptionsBtn from "./OptionsBtn";
import "../My.scss";

interface QrsProps {
  qrs: any[];
}
const QrsTables: FC<QrsProps> = ({ qrs }) => {
  const renderQRs = () => {
    return qrs.map((qr: any) => {
      const custom: any = _.chain(qr.custom)
        .set("value", getValueQrcode(qr._id))
        .set("size", 120)
        .value();
      const createdAt = moment(qr.createdAt).format("DD/MM/YYYY");
      return (
        <tr key={qr._id}>
          <td>
            <span>{qr.name}</span>
          </td>
          <td>
            <QRCode {...custom}></QRCode>
          </td>
          <td>{qr.contentType}</td>
          <td>{createdAt}</td>
          <td>{qr.totalScan}</td>
          <td className="actions">
            <Link to={"/generate/" + qr._id} className="button style1">
              Download
              <i className="fa-solid fa-download fa-bounce"></i>
            </Link>
            <OptionsBtn id={qr._id} removeQr={() => {}}></OptionsBtn>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className="qrs">
      <thead>
        <tr>
          <th>Name</th>
          <th>QR code</th>
          <th>Type</th>
          <th>Created</th>
          <th>Total scan</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderQRs()}</tbody>
    </table>
  );
};

export default QrsTables;
