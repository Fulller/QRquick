import { FC } from "react";
import Features from "../components/Features";
import Example from "./Example";
import "./Home.scss";

const Home: FC = () => {
  return (
    <main id="home-page">
      <Features />
      {/* <Example /> */}
    </main>
  );
};
export default Home;
