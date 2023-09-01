import { FC, ReactNode, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { useText } from "../../../hooks";
import "../My.scss";

interface OptionsBtnProps {
  id: string;
  removeQr: (id: string) => void;
}
interface Option {
  title: string;
  icon: ReactNode;
  handleClick?: any;
  modal?: ReactNode;
}

const OptionsBtn: FC<OptionsBtnProps> = ({ id, removeQr }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const text = useText();

  const options: Option[] = [
    {
      title: "Custom design",
      icon: <i className="fa-solid fa-palette"></i>,
      handleClick: () => {
        navigate("/generate/" + id);
      },
    },
    {
      title: "Share",
      icon: <i className="fa-solid fa-share"></i>,
    },
    {
      title: "Remove",
      icon: <i className="fa-solid fa-trash"></i>,
      handleClick: () => {
        setVisible(false);
        setOpen(true);
      },
      modal: (
        <Modal
          title={text("Remove QR code?")}
          centered
          open={open}
          onOk={() => {
            removeQr(id);
            setOpen(false);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          width={1000}
          okText={text("Remove")}
          cancelText={text("Cancel")}
          okType="danger"
        >
          {text("Are you sure you want to remove this QR code?")}
        </Modal>
      ),
    },
  ];

  return (
    <>
      <Tippy
        interactive={true}
        visible={visible}
        placement="top-end"
        render={(attrs) => {
          return (
            <div className="options" tabIndex={-1} {...attrs}>
              {options.map((option: Option) => (
                <div key={option.title} className="wrap-option">
                  <div className="option" onClick={option.handleClick}>
                    <span>{option.icon}</span>
                    <span>{text(option.title)}</span>
                  </div>
                  {option.modal}
                </div>
              ))}
            </div>
          );
        }}
        onClickOutside={() => {
          setVisible(false);
        }}
      >
        <button
          className="button style2 option-btn"
          title="options"
          data-tooltip-id={`option-tooltip-${id}`}
          onClick={() => setVisible(!visible)}
        >
          {text("Options")}
          <i className="fa-solid fa-gear fa-spin-pulse"></i>
        </button>
      </Tippy>
    </>
  );
};

export default OptionsBtn;
