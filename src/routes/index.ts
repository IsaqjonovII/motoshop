import { lazy } from "react";
const Home = lazy(() => import("pages/Home"));
import { IAppRoutes, INavRoutes } from "interfaces";

export const appRoutes: IAppRoutes[] = [
  {
    key: "home",
    path: "/",
    Component: Home,
  },
];

export const navRoutes: INavRoutes[] = [
  {
    key: "Mototsikllar",
    path: "/motocycles",
  },
  {
    key: "sportbikelar",
    path: "/sportbikes",
  },
  {
    key: "skuterlar",
    path: "/scooters",
  },
  {
    key: "aksessuarlar",
    path: "/accessories",
  },
  {
    key: "ehtiyot qismlar",
    path: "/spareparts",
  },
  {
    key: "Shlemlar",
    path: "/helmets",
  },
];
