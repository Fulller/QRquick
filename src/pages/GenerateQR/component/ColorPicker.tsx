import { FC } from "react";
import "../GenerateQR.scss";

interface ColorPickerProps {
  defaultValue: string;
  onChange: any;
}
const ColorPicker: FC<ColorPickerProps> = ({ defaultValue, onChange }) => {
  return (
    <label className="color-picker">
      <input
        type="color"
        title="color-picker"
        defaultValue={defaultValue}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="input"
      />
      <span className="value">{defaultValue}</span>
    </label>
  );
};
export default ColorPicker;
