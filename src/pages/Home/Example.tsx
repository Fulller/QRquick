import { FC } from "react";
import generator from "../../images/example/generator.png";
import create from "../../images/example/create.png";
import my from "../../images/example/my.png";

const Example: FC = () => {
  return (
    <div id="example">
      <img src={create} alt="" />
      <img src={generator} alt="" />
      <img src={my} alt="" />
    </div>
  );
};

export default Example;
