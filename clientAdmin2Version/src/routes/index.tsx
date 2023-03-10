import React from "react";

const EditUslugiPage = React.lazy(() =>import("src/pages/UslugiPage/EditPage"));
const ServicesPage = React.lazy(() =>import("src/pages/ServicesPage"));
const EditAboutPage = React.lazy(() =>import("src/pages/AboutPage/EditPage"));
const EditPageProfolio = React.lazy(() =>import("src/pages/PortfolioPage/EditPage"));
const PortfolioPage = React.lazy(() =>import("src/pages/PortfolioPage"));
const EditPage = React.lazy(() =>import("src/pages/MenuPage/EditPage"));
const EditPageNews = React.lazy(() =>import("src/pages/NewsPage/EditPage"));
const EditPageSlide = React.lazy(() =>import("src/pages/SliderPage/EditPage"));
const ContactPage = React.lazy(() =>import("src/pages/ContactPage/ContactPage"));
const NewsPage = React.lazy(() => import("src/pages/NewsPage/NewsPage"));
const UslugiPage = React.lazy(() => import("src/pages/UslugiPage/UslugiPage"));
const CommentsPage = React.lazy(() =>import("src/pages/CommentsPage/CommentsPage"));
const AboutPage = React.lazy(() => import("src/pages/AboutPage/AboutPage"));
const SiginPage = React.lazy(() => import("src/pages/SiginPage"));
const SliderPage = React.lazy(() => import("src/pages/SliderPage"));
const MenuPage = React.lazy(() => import("src/pages/MenuPage"));
const MainPage = React.lazy(() => import("src/pages/MainPage"));

// Private Router == AdminPanel MErchant
export const PrivateRoute = [
  {
    path: "/services",
    component: <ServicesPage />,
    key: "ServicesPage",
  },
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
    path: "/portfolio",
    component: <PortfolioPage />,
    key: "PortfolioPage",
  },
  {
    path: "/portfolio/:id",
    component: <EditPageProfolio />,
    key: "EditPageProfolio",
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
    path: "/about/edit",
    component: <EditAboutPage />,
    key: "EditAboutPage",
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
    path: "/uslugi/:id",
    component: <EditUslugiPage />,
    key: "EditUslugiPage",
  },
  {
    path: "/news",
    component: <NewsPage />,
    key: "NewsPage",
  },
  {
    path: "/news/:id",
    component: <EditPageNews />,
    key: "EditPageNews",
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
