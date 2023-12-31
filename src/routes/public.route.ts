import { FC } from "react";
import PrimaryLayout, { PrimarylayoutProps } from "../layouts/PrimaryLayout";
import ContentLayout, { ContentlayoutProps } from "../layouts/ContentLayout";

import Home from "../pages/Home";
import CreateQR from "../pages/Create";
import MyQR from "../pages/My";
import GenerateQR from "../pages/GenerateQR";
import Test from "../pages/Test";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ShowContent from "../pages/ShowContent";

import { features } from "../constans/feature.const";
import _ from "lodash";
interface HomeProps {}

export interface RouteType {
  Layout: FC<PrimarylayoutProps | ContentlayoutProps>;
  Page: FC<HomeProps>;
  path: string;
  title: string;
  children?: {
    path: string;
    Component: FC;
  }[];
}

const publicRoutes: RouteType[] = [
  {
    Layout: PrimaryLayout,
    Page: Home,
    path: "/",
    title: "Home",
  },
  {
    Layout: PrimaryLayout,
    Page: Home,
    path: "/home",
    title: "Home",
  },
  {
    Layout: PrimaryLayout,
    Page: CreateQR,
    path: "/create",
    title: "Create QR",
    children: _.map(features, ({ path, Component }) => {
      return {
        path,
        Component,
      };
    }),
  },
  {
    Layout: PrimaryLayout,
    Page: MyQR,
    path: "/my",
    title: "My QR",
  },
  {
    Layout: PrimaryLayout,
    Page: GenerateQR,
    path: "/generate/:id",
    title: "Generate QR code",
  },
  {
    Layout: PrimaryLayout,
    Page: Test,
    path: "/test",
    title: "Test QR code",
  },
  {
    Layout: PrimaryLayout,
    Page: Login,
    path: "/login",
    title: "Login",
  },
  {
    Layout: PrimaryLayout,
    Page: NotFound,
    path: "*",
    title: "NotFound",
  },
  {
    Layout: ContentLayout,
    Page: ShowContent,
    path: "/content/:type/:id",
    title: "Content",
  },
];

export default publicRoutes;
