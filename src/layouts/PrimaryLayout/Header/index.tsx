import Logo from "../../../images/logos/logo.png";
import { FC, useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuthUrl } from "../../../tools/url.tool";
import * as selector from "../../../redux/selector";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Avatar } from "antd";
import Tippy from "@tippyjs/react/headless";
import { logOut } from "../../../services/user.service";

import "./Header.scss";

interface MenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}
const menu: MenuItem[] = [
  {
    title: "Create QR",
    path: "/create",
    icon: <i className="fa-solid fa-circle-plus"></i>,
  },
  {
    title: "My QR",
    path: "/my",
    icon: <i className="fa-solid fa-qrcode"></i>,
  },
];
const Header: FC = () => {
  const user = useSelector(selector.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [avatarVisible, setAvatarVisible] = useState<boolean>(false);
  async function handleLogout() {
    await logOut();
    navigate("/");
    window.location.reload();
  }

  return (
    <header id="header">
      <div className="left">
        <Tippy
          interactive={true}
          visible={menuVisible}
          placement="top-end"
          render={(attrs) => {
            return (
              <div className="tooltip" tabIndex={-1} {...attrs}>
                <div className="part">
                  {menu.map((item: MenuItem) => {
                    if (item.path === "/my" && !user) {
                      return <span key={item.path}></span>;
                    }
                    return (
                      <Link
                        to={item.path}
                        key={"menu" + item.path}
                        className="tooltip-item"
                      >
                        <span className="icon">{item.icon}</span>
                        <span className="title">{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
                <div className="part">
                  {user ? (
                    <button onClick={handleLogout} className="tooltip-item">
                      <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="title">Logout</span>
                    </button>
                  ) : (
                    <Link
                      to={getAuthUrl("/auth/google")}
                      className="tooltip-item"
                    >
                      <span className="icon">
                        <i className="fa-brands fa-google"></i>
                      </span>
                      <span className="title">Login with google</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          }}
          onClickOutside={() => {
            setMenuVisible(false);
          }}
        >
          <button
            title="menu"
            className="button menu-btn"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </Tippy>
      </div>
      <div className="center">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="menu">
          {menu.map((item: MenuItem) => {
            if (item.path === "/my" && !user) {
              return <span key={item.path}></span>;
            }
            return (
              <Link
                to={item.path}
                key={item.path}
                className={`item button link ${
                  pathname.includes(item.path) ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="right">
        {user ? (
          <Tippy
            interactive={true}
            visible={avatarVisible}
            placement="top-end"
            render={(attrs) => {
              return (
                <div className="tooltip" tabIndex={-1} {...attrs}>
                  <h3>{user.displayName}</h3>
                  <div className="part">
                    {[menu[1]].map((item: MenuItem) => {
                      return (
                        <Link
                          to={item.path}
                          key={"avatar" + item.path}
                          className="tooltip-item"
                        >
                          <span className="icon">{item.icon}</span>
                          <span className="title">{item.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="part">
                    <button onClick={handleLogout} className="tooltip-item">
                      <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="title">Logout</span>
                    </button>
                  </div>
                </div>
              );
            }}
            onClickOutside={() => {
              setAvatarVisible(false);
            }}
          >
            <div
              className="user"
              onClick={() => setAvatarVisible(!avatarVisible)}
            >
              <Avatar
                src={_.get(user, "photos[0].value")}
                alt="avatar"
                size={50}
              ></Avatar>
            </div>
          </Tippy>
        ) : (
          <a
            id="login-google-btn"
            href={getAuthUrl("/auth/google")}
            className="button  led login"
          >
            Login with <i className="fa-brands fa-google"></i>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
