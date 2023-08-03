import { FC } from "react";
import ColorPicker from "../ColorPicker";
import { CustomQRCodeProps } from "../../../components/QRcode";
import "../../GenerateQR.scss";
import "./EyePatterns.scss";

interface EyePatternsProps {
  setStyleQR: any;
  qrProps: CustomQRCodeProps;
}
const EyePatterns: FC<EyePatternsProps> = ({ setStyleQR, qrProps }) => {
  function handleChangeEyeColor(value: string) {
    setStyleQR({ key: "eyeColor", payload: value });
  }
  return (
    <div className="editor-feature" id="eye-patterns">
      <h3>Eye Patterns</h3>
      <div className="wrap-features">
        <div className="feature">
          <h5>Eye color</h5>
          <ColorPicker
            defaultValue={qrProps.eyeColor}
            onChange={handleChangeEyeColor}
          />
        </div>
        <div className="feature">
          <h5>Eye radius</h5>
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            defaultValue={qrProps.eyeRadius}
            onChange={(e) => {
              setStyleQR({
                key: "eyeRadius",
                payload: parseInt(e.target.value),
              });
            }}
            title="eye-radius"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default EyePatterns;
