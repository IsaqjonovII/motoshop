import { lazy } from "react";
import { routes } from "constants/routes";
import { IAppRoutes, INavRoutes } from "interfaces";
const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));
const Profile = lazy(() => import("pages/User"));
const Ads = lazy(() => import("pages/Ads/All"));
const AdInfo = lazy(() => import("pages/Ads/Info"));
const PostMoto = lazy(() => import("pages/Ads/PostAd"));

const {
  HOME,
  AUTH,
  PROFILE,
  ADS,
  AD_INFO,
  POST_MOTO,
} = routes;


export const privateRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: ADS, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
  { key: "profile", path: PROFILE, Component: Profile },
  { key: "postProduct", path: POST_MOTO, Component: PostMoto },
];
export const publicRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: ADS, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
];

export const navRoutes: INavRoutes[] = [
  {
    key: "Barcha e'lonlar",
    path: ADS,
  },
];
