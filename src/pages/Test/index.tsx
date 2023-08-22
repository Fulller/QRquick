import { FC, useState } from "react";
import QRcode from "../components/QRcode";

const Home: FC = () => {
  const value = "TEL:113";
  return (
    <main id="home-page">
      <QRcode value={value}></QRcode>
    </main>
  );
};
// ("WIFI:S:Le Binh Bao;T:WPA;P:maybotbaodumtao;H:false;;");
// WIFI:S:Le Binh Bao;T:WPA;P:maybotbaodumtao;H:false;;
export default Home;
