import "./PrimaryLayout.scss";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";

export interface PrimarylayoutProps {
  children: ReactNode;
  title: string;
}

const Primarylayout: FC<PrimarylayoutProps> = ({ children, title = "" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="primary-layout">
      <div
        id="header-primary-layout"
        className={`${isScrolled ? "scrolled" : ""}`}
      >
        <Header></Header>
      </div>
      <div id="main-primary-layout">{children}</div>
    </div>
  );
};

export default Primarylayout;
