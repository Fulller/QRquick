import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";

const Audio: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[featureName.AUDIO, "Name"]}
        contentType={featureName.AUDIO}
      ></QRform>
    </div>
  );
};
export default Audio;
