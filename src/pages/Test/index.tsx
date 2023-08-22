import { FC, useState } from "react";
import QRcode from "../components/QRcode";

const Home: FC = () => {
  // const ssid = "WiFi-Dung";
  // const password = "79797979";
  // const securityType = "WPA";
  const [ssid, setSsid] = useState("");
  const [securityType, setSecurityType] = useState("WPA");
  const [password, setPassword] = useState("");
  const [qrData, setQRData] = useState("");

  const generateQRData = () => {
    const qrDataString: string = `WIFI:S:${ssid};T:${securityType};P:${password};;`;
    setQRData(qrDataString);
  };
  return (
    <main id="home-page">
      <div>
        <h2>Generate WiFi QR Code</h2>
        <div>
          <label>
            SSID:
            <input
              type="text"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Security Type:
            <select
              value={securityType}
              onChange={(e) => setSecurityType(e.target.value)}
            >
              <option value="WPA">WPA</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Pass</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button onClick={generateQRData}>Generate QR Code</button>
        {qrData && (
          <div>
            <h3>QR Code:</h3>
            <QRcode value={qrData}></QRcode>
          </div>
        )}
      </div>
    </main>
  );
};
// ("WIFI:S:Le Binh Bao;T:WPA;P:maybotbaodumtao;H:false;;");
// WIFI:S:Le Binh Bao;T:WPA;P:maybotbaodumtao;H:false;;
export default Home;
