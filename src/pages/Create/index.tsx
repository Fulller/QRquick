// Create.tsx
import { FC } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { features } from "../../constans/feature.const";
import _ from "lodash";
import "./Create.scss";

const Create: FC = () => {
  const { pathname } = useLocation();
  return (
    <main id="create-page">
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
              <span className="title">{_.upperFirst(feature.title)}</span>
            </Link>
          );
        })}
      </div>
      <Outlet></Outlet>
    </main>
  );
};

export default Create;
