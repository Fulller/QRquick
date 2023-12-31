import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const Audio: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.AUDIO, InputName.NAME]}
        contentType={featureName.AUDIO}
      ></QRform>
    </div>
  );
};
export default Audio;
