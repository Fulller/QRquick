import { FC } from "react";
import QRcode from "../components/QRcode";

const Home: FC = () => {
  const ssid = "WiFi-Dung";
  const password = "79797979";
  const securityType = "WPA";
  return (
    <main id="home-page">
      <QRcode
        value={`WIFI:S:${ssid};T:${securityType};P:${password};;`}
      ></QRcode>
    </main>
  );
};
export default Home;
