import { FC } from "react";
import QRform from "../Form";
import { featureName } from "../../../constans/featureName.const";

const Link: FC = () => {
  return (
    <div className="create-feature">
      <QRform
        nameInputs={[featureName.LINK, "Name"]}
        contentType={featureName.LINK}
      ></QRform>
    </div>
  );
};
export default Link;
