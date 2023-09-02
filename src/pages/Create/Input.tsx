import { FC, useState, useEffect, ChangeEvent } from "react";
import { fileType as fileTypeEnum } from "../../constans/fileType.const";
import { useDropzone } from "react-dropzone";
import { formatFileSize } from "../../tools/file.tool";
import _ from "lodash";
import { maxSize } from "../../constans/fileType.const";
import { useMediaQuery } from "react-responsive";
import { AnySchema } from "joi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useText } from "../../hooks";

export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
  fileType?: fileTypeEnum;
  setFormValue?: any;
  label?: string;
  standardForAPI?: string;
  validation?: AnySchema;
  valuesForSelect?: any;
  defaultValue?: any;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "",
  name = "",
  optional = false,
  fileType = fileTypeEnum.Image,
  setFormValue,
  label = "",
  validation,
  defaultValue = null,
  valuesForSelect = [],
}) => {
  const text = useText();
  const isMobile = useMediaQuery({ maxWidth: 576 });
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
  const [value, setValue] = useState<File | string | null>(defaultValue);
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueString: string = event.target.value.trim();
    setErrString(null);
    setValue(valueString);
  };
  const handleTextValidate = () => {
    if (validation) {
      const { error, value: valueValidate } = validation.validate(value);
      if (error) {
        const { message } = error;
        setErrString(_.replace(message, "value", _.upperFirst(name)));
        if (setFormValue) {
          setFormValue({ name: name, payload: null });
        }
      } else {
        setErrString(null);
        if (setFormValue) {
          setFormValue({ name: name, payload: valueValidate });
        }
      }
    }
  };
  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    setValue(_.get(e, "target.files[0]", null));
  }
  function handleSelect(e: any) {
    setValue(_.get(e, "target.value"));
  }
  const handleTextEditorChange = (value: string) => {
    setValue(value);
  };
  useEffect(() => {
    if (type === "text") return;
    if (setFormValue) {
      setFormValue({ name: name, payload: value });
    }
  }, [name, value, setFormValue, validation, type]);
  return (
    <div className="wrap-input-group">
      {type === "file" && (
        <label
          {...(!isMobile ? getRootProps() : {})}
          className={`input-group input-group-file ${
            drapping ? "drapping" : ""
          } `}
        >
          {isMobile && (
            <input
              type="file"
              onChange={handleChangeFile}
              hidden
              accept={fileType}
            />
          )}
          {!value ? (
            <p className="placeholder">
              <i className="fa-solid fa-upload fa-bounce upload-icon"></i>
              {text(placeholder)}
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
      )}
      {type === "text" && (
        <label className="input-group">
          <span className="input-name">{text(_.upperFirst(label))}</span>
          <input
            className="input"
            title={name}
            type="text"
            placeholder={`${text(placeholder)} ${
              optional ? `(${text("optional")})` : ""
            }`}
            spellCheck={false}
            onChange={handleTextChange}
            onBlur={handleTextValidate}
            defaultValue={defaultValue}
          />
        </label>
      )}
      {type === "select" && (
        <label className="input-group">
          <span className="input-name">{_.upperFirst(label)}</span>
          <select className="input" title={name} onChange={handleSelect}>
            {valuesForSelect.map((valueForSelect: any) => {
              return (
                <option value={valueForSelect.value} key={valueForSelect.value}>
                  {valueForSelect.title}
                </option>
              );
            })}
          </select>
        </label>
      )}
      {type === "text-editor" && (
        <ReactQuill
          id="text-editor"
          value={value?.toString()}
          onChange={handleTextEditorChange}
          modules={{
            toolbar: [
              "bold",
              "italic",
              "underline",
              "strike",
              "color",
              "blockquote",
              "code-block",
              "align",
              "link",
              "image",
            ],
          }}
        />
      )}
      {errString && <p className="errString">{errString}</p>}
    </div>
  );
};

export default Input;
