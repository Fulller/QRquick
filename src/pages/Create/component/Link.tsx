import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const Link: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.LINK, InputName.NAME]}
        contentType={featureName.LINK}
      ></QRform>
    </div>
  );
};
export default Link;
