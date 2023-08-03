import { FC } from "react";
import ColorPicker from "../ColorPicker";
import { CustomQRCodeProps } from "../../../components/QRcode";
import dotsImg from "../../../../images/create/dots.svg";
import squaresImg from "../../../../images/create/squares.svg";
import "../../GenerateQR.scss";
import "./BodyPatterns.scss";

interface ShapeColorsProps {
  setStyleQR: any;
  qrProps: CustomQRCodeProps;
}
const ShapeColors: FC<ShapeColorsProps> = ({ setStyleQR, qrProps }) => {
  return (
    <div className="editor-feature" id="body-patterns">
      <h3>Body Patterns</h3>
      <div className="wrap-features">
        <div className="feature">
          <h5>Background color</h5>
          <ColorPicker
            defaultValue={qrProps.bgColor || ""}
            onChange={(value: string) =>
              setStyleQR({ key: "bgColor", payload: value })
            }
          ></ColorPicker>
        </div>
        <div className="feature">
          <h5>Pattern color</h5>
          <ColorPicker
            defaultValue={qrProps.fgColor || ""}
            onChange={(value: string) =>
              setStyleQR({ key: "fgColor", payload: value })
            }
          ></ColorPicker>
        </div>
        <div className="feature cell-style">
          <h5>Cell style</h5>
          <div className="images">
            <button
              title="squaresImg"
              className="cell"
              onClick={() => setStyleQR({ key: "qrStyle", payload: "squares" })}
            >
              <img src={squaresImg} alt="" />
            </button>
            <button
              title="dotsImg"
              className="cell"
              onClick={() => setStyleQR({ key: "qrStyle", payload: "dots" })}
            >
              <img src={dotsImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShapeColors;
