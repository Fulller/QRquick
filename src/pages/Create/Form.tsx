import { FC, useReducer, useState, useEffect, useCallback } from "react";
import Input from "./Input";
import { inputsProps } from "../../constans/inputs.const";
import _ from "lodash";
import { featureName } from "../../constans/featureName.const";
import { standardForAPI } from "../../tools/lodash.toll";
import { createQrcode } from "../../services/qrcode.service";
import { useNavigate } from "react-router-dom";

interface QRformProps {
  nameInputs: string[];
  contentType: featureName;
}
const reducer = (state: any, action: any) => {
  return {
    ...state,
    [action.name]: action.payload,
  };
};
const QRform: FC<QRformProps> = ({ nameInputs = ["Name"], contentType }) => {
  const navigate = useNavigate();
  const initialState = _.chain(nameInputs)
    .keyBy((item) => item)
    .mapValues(() => null)
    .set("contentType", contentType)
    .value();
  const [state, setFormValue] = useReducer(reducer, initialState);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const checkCanSubmit = useCallback(
    (state: any): boolean => {
      return inputsProps
        .filter(
          (inputProps) =>
            nameInputs.includes(inputProps.name) && !inputProps.optional
        )
        .every((inputProps) => !!state[inputProps.name]);
    },
    [nameInputs]
  );
  useEffect(() => {
    setCanSubmit(checkCanSubmit(state));
  }, [state, checkCanSubmit]);
  const handleSubmit = async () => {
    try {
      if (!canSubmit) return;
      const { metadata: qrCode }: any = await createQrcode(
        standardForAPI(state, {
          Name: "name",
          [featureName.LINK]: "data",
          [featureName.AUDIO]: "file",
          [featureName.IMAGE]: "file",
          [featureName.PDF]: "file",
        })
      );
      navigate("/generate/" + qrCode._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="QR-from">
      {_.chain(inputsProps)
        .filter((inputProps) => {
          return nameInputs.includes(inputProps.name);
        })
        .map((inputProps) => {
          return (
            <Input
              key={inputProps.name}
              {...inputProps}
              setFormValue={setFormValue}
            ></Input>
          );
        })
        .value()}
      <button
        id="create-btn"
        disabled={!canSubmit}
        className={`button ${canSubmit ? "" : "disable"}`}
        onClick={handleSubmit}
      >
        Customize & Download QR
      </button>
    </div>
  );
};

export default QRform;
