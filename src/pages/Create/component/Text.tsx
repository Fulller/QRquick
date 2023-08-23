import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const Text: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.TEXT_EDITOR, InputName.NAME]}
        contentType={featureName.TEXT}
      ></QRform>
    </div>
  );
};
export default Text;
