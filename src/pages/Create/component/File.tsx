import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const File: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.FILE, InputName.NAME]}
        contentType={featureName.FILE}
      ></QRform>
    </div>
  );
};
export default File;
