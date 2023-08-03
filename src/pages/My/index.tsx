import { FC, useEffect, useState } from "react";
import { getQRcodeByOwner } from "../../services/qrcode.service";
import "./My.scss";
import QrsTables from "./components/QrTable";
import QrTags from "./components/QrTags";
const QrsTags: FC = () => {
  const [qrs, setQrs] = useState([]);
  useEffect(() => {
    (async () => {
      const { metadata: qrs } = await getQRcodeByOwner();
      if (qrs) {
        setQrs(qrs);
      }
    })();
  }, []);

  return (
    <main id="my-page">
      {/* <QrsTables qrs={qrs}></QrsTables> */}
      <QrTags qrs={qrs}></QrTags>
    </main>
  );
};

export default QrsTags;
