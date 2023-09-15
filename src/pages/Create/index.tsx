// Create.tsx
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Features from "../components/Features";
import "./Create.scss";

const Create: FC = () => {
  return (
    <main id="create-page">
      <Features></Features>
      <Outlet></Outlet>
    </main>
  );
};

export default Create;
