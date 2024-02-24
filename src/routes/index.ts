import { lazy } from "react";
import { routes } from "constants/routes";
import { IAppRoutes, INavRoutes } from "interfaces";
const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));
const Profile = lazy(() => import("pages/User"));
const PostMoto = lazy(() => import("pages/Ads/PostAd"));
const Ads = lazy(() => import("pages/Ads/All"));
const AdInfo = lazy(() => import("pages/Ads/Info"));

const {
  HOME,
  AUTH,
  PROFILE,
  MOTOCYCLES,
  AD_INFO,
  POST_MOTO,
} = routes;


export const privateRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: MOTOCYCLES, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
  { key: "postProduct", path: POST_MOTO, Component: PostMoto },
  { key: "profile", path: PROFILE, Component: Profile }
];
export const publicRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: MOTOCYCLES, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
];

export const navRoutes: INavRoutes[] = [
  {
    key: "Barcha e'lonlar",
    path: MOTOCYCLES,
  },
];
