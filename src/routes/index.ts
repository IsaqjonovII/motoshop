import { lazy } from "react";
import { IAppRoutes, INavRoutes } from "interfaces";
const Home = lazy(() => import("pages/Home"));

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
    key: "velosipedlar",
    path: "/bicycles",
  },
];
