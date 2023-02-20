import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { HomePage } from "pages/HomePage";
import { ServisesPage } from "pages/ServisesPage";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  SERVISES = "servises",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.SERVISES]: "/servises",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RouterPath.home,
    element: <HomePage />,
  },
  [AppRoutes.SERVISES]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.servises,
    element: <ServisesPage />,
  },
};
