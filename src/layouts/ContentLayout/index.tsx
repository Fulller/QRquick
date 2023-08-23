import { FC, ReactNode, useEffect } from "react";
import "./ContentLayout.scss";

export interface ContentlayoutProps {
  children: ReactNode;
  title: string;
}

const ContentLayout: FC<ContentlayoutProps> = ({ children, title = "" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div id="content-layout">{children}</div>;
};

export default ContentLayout;
