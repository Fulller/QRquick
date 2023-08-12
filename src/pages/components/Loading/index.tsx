import { FC } from "react";
import loading from "../../../images/loading/loading.svg";
import "./Loading.scss";

const Loading: FC = () => {
  return (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
