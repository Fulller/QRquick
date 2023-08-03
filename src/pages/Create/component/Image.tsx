import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";

const Image: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[featureName.IMAGE, "Name"]}
        contentType={featureName.IMAGE}
      ></QRform>
    </div>
  );
};
export default Image;
