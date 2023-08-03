import { FC, useState, useEffect, ChangeEvent } from "react";
import { fileType as fileTypeEnum } from "../../constans/fileType.const";
import { useDropzone } from "react-dropzone";
import { formatFileSize } from "../../tools/file.tool";
import _ from "lodash";
import { featureName } from "../../constans/featureName.const";
import { isNotURL } from "../../tools/url.tool";
import { maxSize } from "../../constans/fileType.const";

export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
  fileType?: fileTypeEnum;
  setFormValue?: any;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "",
  name = "",
  optional = false,
  fileType = fileTypeEnum.Image,
  setFormValue,
}) => {
  const [drapping, setDrapping] = useState<boolean>(false);
  const [errString, setErrString] = useState<string | null>(null);
  const { getRootProps } = useDropzone({
    accept: {
      [fileType]: [],
    },
    multiple: true,
    maxSize: maxSize,
    onDragEnter(event) {
      const [memeAccept, typeAccept] = fileType.split("/");
      const [memeDrap, typeDrap] = event.dataTransfer?.items[0].type.split("/");
      if (memeDrap === memeAccept) {
        if (typeAccept === "*" || typeAccept === typeDrap) {
          setDrapping(true);
        }
      }
    },
    onDragLeave() {
      setDrapping(false);
    },
    onDrop(files) {
      setValue(files[0]);
      setDrapping(false);
    },
  });
  const [value, setValue] = useState<File | string | null>(null);
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueString: string = event.target.value.trim();
    if (name === featureName.LINK && valueString && isNotURL(valueString)) {
      setErrString("example url: https://me-qr.com/");
      setValue(null);
      return;
    }
    setErrString(null);
    setValue(valueString);
  };
  useEffect(() => {
    if (setFormValue) {
      setFormValue({ name: name, payload: value });
    }
  }, [name, value, setFormValue]);
  return (
    <>
      {type === "file" ? (
        <label
          {...getRootProps()}
          className={`input-group input-group-file ${
            drapping ? "drapping" : ""
          } `}
        >
          {!value ? (
            <p className="placeholder">
              <i className="fa-solid fa-upload fa-bounce upload-icon"></i>
              {placeholder}
            </p>
          ) : (
            <div className="file">
              <span className="name">{_.get(value, "name", "")}</span>
              <span className="size">
                {formatFileSize(_.get(value, "size", 0))}
              </span>
            </div>
          )}
        </label>
      ) : (
        <label className="input-group">
          <span className="input-name">{name}</span>
          <input
            className="input"
            title={name}
            type={type}
            placeholder={`${placeholder} ${optional ? "(optional)" : ""}`}
            spellCheck={false}
            onChange={handleTextChange}
          />
        </label>
      )}
      <p className="errString">{errString}</p>
    </>
  );
};

export default Input;
