import React from "react";
const SiginPage = React.lazy(() => import("../pages/SiginPage"));
const SliderPage = React.lazy(() => import("../pages/SliderPage"));
const MenuPage = React.lazy(() => import("../pages/MenuPage"));
const MainPage = React.lazy(() => import("../pages/MainPage"));

// Private Router == AdminPanel MErchant
export const PrivateRoute = [
  {
    path: "/slider",
    component: <SliderPage />,
    key: "SliderPage",
  },
  {
    path: "/",
    component: <MainPage />,
    key: "MainPage",
  },
  {
    path: "/menus",
    component: <MenuPage />,
    key: "MenuPage",
  },
];

// Publick Router
export const PublicRoute = [
  {
    path: "/",
    component: <SiginPage />,
    key: "SiginPage",
  },
];
