import { FC, useEffect, useState } from "react";
import { getQRcodeByOwner } from "../../services/qrcode.service";
import "./My.scss";
import { useDataFetching } from "../../hooks/useDataFetching";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import QrTags from "./components/QrTags";
import Loading from "../components/Loading";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import NoQr from "./components/NoQr";

const PAGE_SIZE: number = 5;
const QrsTags: FC = () => {
  const [qrs, setQrs] = useState([]);
  const [qrsPage_based, setQrsPage_based] = useState([]);
  const [statusLoading, setStatusLoading, statusEnums] = useDataFetching();
  const navigate = useNavigate();
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    const startIndex: number = (pageNumber - 1) * PAGE_SIZE;
    const endIndex: number = pageNumber * PAGE_SIZE;
    setQrsPage_based(_.slice(qrs, startIndex, endIndex));
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    (async () => {
      try {
        let { metadata: qrs = [] } = await getQRcodeByOwner();
        qrs = _.reverse(qrs);
        if (qrs) {
          setQrs(qrs);
          setQrsPage_based(_.slice(qrs, 0, PAGE_SIZE));
          setStatusLoading(statusEnums.LOADED);
        }
        if (qrs.length === 0) {
          setStatusLoading(statusEnums.NODATA);
        }
      } catch (err) {
        navigate("/");
      }
    })();
  }, [setStatusLoading, statusEnums, navigate]);
  return (
    <main id="my-page">
      {statusLoading === statusEnums.LOADING && <Loading />}
      {statusLoading === statusEnums.LOADED && (
        <>
          <QrTags qrs={qrsPage_based} />
          <div className="wrap-pagination">
            <Pagination
              defaultCurrent={1}
              total={qrs.length}
              pageSize={PAGE_SIZE}
              onChange={onChange}
              responsive={true}
            />
          </div>
        </>
      )}
      {statusLoading === statusEnums.NODATA && <NoQr />}
    </main>
  );
};

export default QrsTags;
