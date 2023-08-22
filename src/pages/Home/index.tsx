import { FC } from "react";
import { features } from "../../constans/feature.const";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./Home.scss";

const Home: FC = () => {
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
              <img src={feature.icon} alt={feature.title} className="icon" />
              <span className="title">{_.upperFirst(feature.title)}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Home;
