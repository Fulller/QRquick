import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";
import { InputName } from "../../../constans/inputs.const";

const Phone: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[InputName.PHONE_NUMBER, InputName.NAME]}
        contentType={featureName.PHONE}
      ></QRform>
    </div>
  );
};
export default Phone;
