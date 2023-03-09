import React from "react";
import EditPage from "src/pages/MenuPage/EditPage";
import EditPageSlide from "src/pages/SliderPage/EditPage";
const ContactPage = React.lazy(() =>
  import("src/pages/ContactPage/ContactPage")
);
const NewsPage = React.lazy(() => import("src/pages/NewsPage/NewsPage"));
const UslugiPage = React.lazy(() => import("src/pages/UslugiPage/UslugiPage"));
const CommentsPage = React.lazy(() =>
  import("src/pages/CommentsPage/CommentsPage")
);
const AboutPage = React.lazy(() => import("src/pages/AboutPage/AboutPage"));
const SiginPage = React.lazy(() => import("src/pages/SiginPage"));
const SliderPage = React.lazy(() => import("src/pages/SliderPage"));
const MenuPage = React.lazy(() => import("src/pages/MenuPage"));
const MainPage = React.lazy(() => import("src/pages/MainPage"));

// Private Router == AdminPanel MErchant
export const PrivateRoute = [
  {
    path: "/slider",
    component: <SliderPage />,
    key: "SliderPage",
  },
  {
    path: "/slider/:id",
    component: <EditPageSlide />,
    key: "EditPageSlide",
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
  {
    path: "/menus/:id",
    component: <EditPage />,
    key: "EditPage",
  },
  {
    path: "/about",
    component: <AboutPage />,
    key: "AboutPage",
  },
  {
    path: "/comments",
    component: <CommentsPage />,
    key: "CommentsPage",
  },
  {
    path: "/uslugi",
    component: <UslugiPage />,
    key: "UslugiPage",
  },
  {
    path: "/news",
    component: <NewsPage />,
    key: "NewsPage",
  },
  {
    path: "/contact",
    component: <ContactPage />,
    key: "ContactPage",
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
