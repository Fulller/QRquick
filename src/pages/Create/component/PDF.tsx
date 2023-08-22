import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const PDF: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.PDF, InputName.NAME]}
        contentType={featureName.PDF}
      ></QRform>
    </div>
  );
};
export default PDF;
