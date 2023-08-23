import { FC } from "react";
import notFound from "../../images/backgrounds/404-image.png";
import "./NotFound.scss";

const NotFound: FC = () => {
  return (
    <main id="not-found-page">
      <div className="wrap-notfound">
        <img src={notFound} alt="" />
        <h1>NOT FOUND 404</h1>
      </div>
    </main>
  );
};

export default NotFound;
