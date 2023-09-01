import { FC } from "react";
import { features } from "../../constans/feature.const";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useText } from "../../hooks";
import "./Home.scss";

const Home: FC = () => {
  const text = useText();
  return (
    <main id="home-page">
      <div className="features  ">
        {features.map((feature) => {
          return (
            <Link
              to={"/create" + feature.path}
              key={feature.path}
              className="feature button led"
            >
              <span className="icon">{feature.icon}</span>
              <span className="title">{text(feature.title)}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Home;
