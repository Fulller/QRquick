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
import { useText } from "../../../hooks";
import { useDispatch } from "react-redux";
import settingSlide from "../../../redux/slides/setting.slide";
import { languageEnum } from "../../../constans/setting.init.const";

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
interface LanguageItem {
  id: string;
  title: string;
}
const languages: LanguageItem[] = [
  { id: languageEnum.VI, title: "Tiếng Việt" },
  { id: languageEnum.EN, title: "English" },
];
const Header: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selector.user);
  const language = useSelector(selector.language);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [languageVisible, setLanguageVisible] = useState<boolean>(false);
  const [languageMenuVisible, setLanguageMenuVisible] =
    useState<boolean>(false);
  const [avatarVisible, setAvatarVisible] = useState<boolean>(false);
  async function handleLogout() {
    await logOut();
    navigate("/");
    window.location.reload();
  }
  const text = useText();

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
                        <span className="title">{text(item.title)}</span>
                      </Link>
                    );
                  })}
                </div>
                <div className="part">
                  <div
                    className="tooltip-item"
                    onClick={() => setLanguageMenuVisible(!languageMenuVisible)}
                  >
                    <span className="icon">
                      <i className="fa-solid fa-language"></i>
                    </span>
                    <span className="title">{text("Language")}</span>
                    <span className="more">
                      <i className="fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                  {languageMenuVisible && (
                    <div className="tooltip-item-more">
                      {languages.map((language) => {
                        return (
                          <div
                            className="tooltip-item-more-item"
                            key={language.id + "#1"}
                            onClick={() => {
                              dispatch(
                                settingSlide.actions.setLanguage(language.id)
                              );
                              setLanguageMenuVisible(false);
                              setMenuVisible(false);
                            }}
                          >
                            {language.title}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {user ? (
                    <button onClick={handleLogout} className="tooltip-item">
                      <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="title">{text("Logout")}</span>
                    </button>
                  ) : (
                    <Link
                      to={getAuthUrl("/auth/google")}
                      className="tooltip-item"
                    >
                      <span className="icon">
                        <i className="fa-brands fa-google"></i>
                      </span>
                      <span className="title">{text("Login with")} google</span>
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
                {text(item.title)}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Tippy
          interactive={true}
          visible={languageVisible}
          onClickOutside={() => {
            setLanguageVisible(false);
          }}
          placement="top-end"
          render={(attrs) => {
            return (
              <div id="language-popper">
                {languages.map((language) => {
                  return (
                    <div
                      className="language-item"
                      key={language.id}
                      onClick={() => {
                        dispatch(settingSlide.actions.setLanguage(language.id));
                        setLanguageVisible(false);
                      }}
                    >
                      {language.title}
                    </div>
                  );
                })}
              </div>
            );
          }}
        >
          <button
            id="lan-btn"
            onClick={() => setLanguageVisible(!languageVisible)}
          >
            {_.upperCase(language)}
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </Tippy>
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
                          <span className="title">{text(item.title)}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="part">
                    <button onClick={handleLogout} className="tooltip-item">
                      <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="title">{text("Logout")}</span>
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
            <span className="text-lg">{text("Login with")}</span>
            <i className="fa-brands fa-google"></i>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
