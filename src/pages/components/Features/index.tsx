import { Link, useLocation } from "react-router-dom";
import { features } from "../../../constans/feature.const";
import { useText } from "../../../hooks";
import "./Features.scss";

const Features = () => {
  const { pathname } = useLocation();
  const text = useText();
  return (
    <div className="features">
      {features.map((feature) => {
        return (
          <Link
            to={"/create" + feature.path}
            key={feature.path}
            className={`feature button led ${
              pathname.includes(feature.path) ? "active" : ""
            }`}
          >
            <span className="icon">{feature.icon}</span>
            <span className="title">{text(feature.title)}</span>
          </Link>
        );
      })}
    </div>
  );
};
export default Features;
