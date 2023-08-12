import { FC } from "react";
import noQrImg from "../../../images/backgrounds/no-qrcodes.svg";
import { Link } from "react-router-dom";

const NoQr: FC = () => {
  return (
    <div className="no-qr">
      <img src={noQrImg} alt="No qr code" />
      <p>
        You haven`t create any QR code. Click “Create new QR” and start work
        with Your QR codes.
      </p>
      <Link to="/create" className="button style2 create-btn">
        <i className="fa-solid fa-plus fa-beat"></i>Create new QR
      </Link>
    </div>
  );
};
export default NoQr;
