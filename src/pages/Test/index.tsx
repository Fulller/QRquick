import { FC } from "react";
import QRcode from "../components/QRcode";
import { refreshToken } from "../../services/user.service";

const Home: FC = () => {
  const ssid = "WiFi-Dung";
  const password = "79797979";
  const securityType = "WPA";
  const handleRefreshToken = async () => {
    await refreshToken();
  };
  return (
    <main id="home-page">
      <QRcode
        value={`WIFI:S:${ssid};T:${securityType};P:${password};;`}
      ></QRcode>

      <button onClick={handleRefreshToken} title="btn">
        Refresh Token
      </button>
    </main>
  );
};
export default Home;
