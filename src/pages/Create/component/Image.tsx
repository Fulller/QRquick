import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const Image: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.IMAGE, InputName.NAME]}
        contentType={featureName.IMAGE}
      ></QRform>
    </div>
  );
};
export default Image;
