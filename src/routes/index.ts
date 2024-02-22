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
  USER_ADS,
  MESSAGES,
  LIKED_ADS,
  VIEWED_ADS,
  POST_MOTO,
} = routes;

const ViewedAds = lazy(() => import("pages/User/Tabs/LastSeen"));
const Messages = lazy(() => import("pages/User/Tabs/index"));
const LikedProducts = lazy(() => import("pages/User/Tabs/SavedBikes"));
const UserAds = lazy(() => import("pages/User/Tabs/Ads"));

export const privateRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: MOTOCYCLES, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
  { key: "postProduct", path: POST_MOTO, Component: PostMoto },
  { key: "profile", path: PROFILE, Component: Profile },
  { key: "userAds", path: USER_ADS, Component: UserAds },
  { key: "messages", path: MESSAGES, Component: Messages },
  { key: "viewedAds", path: VIEWED_ADS, Component: ViewedAds },
  { key: "likedProducts", path: LIKED_ADS, Component: LikedProducts },
];
export const publicRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "ads", path: MOTOCYCLES, Component: Ads },
  { key: "adInfo", path: AD_INFO, Component: AdInfo },
  { key: "userAds", path: USER_ADS, Component: UserAds },
  { key: "messages", path: MESSAGES, Component: Messages },
  { key: "viewedAds", path: VIEWED_ADS, Component: ViewedAds },
  { key: "likedProducts", path: LIKED_ADS, Component: LikedProducts },
];

export const navRoutes: INavRoutes[] = [
  {
    key: "Barcha e'lonlar",
    path: MOTOCYCLES,
  },
];
