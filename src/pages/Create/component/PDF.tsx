import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";

const PDF: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[featureName.PDF, "Name"]}
        contentType={featureName.PDF}
      ></QRform>
    </div>
  );
};
export default PDF;
