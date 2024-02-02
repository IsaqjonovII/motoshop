import { lazy } from "react";
import { routes } from "constants/routes";
import { IAppRoutes, INavRoutes } from "interfaces";
const Home = lazy(() => import("pages/Home"));
const Auth = lazy(() => import("pages/Auth"));
const Profile = lazy(() => import("pages/User"));
const PostMoto = lazy(() => import("pages/Ads/PostAd"));

const {
  HOME,
  AUTH,
  PROFILE,
  MOTOCYCLES,
  // EDIT_PROFILE,
  // MESSAGES,
  // LIKED_PRODUCTS,
  POST_MOTO,
} = routes;

// const EditProfile = lazy(() => import("pages/EditProfile"));
// const Messages = lazy(() => import("pages/Messages"));
// const LikedProducts = lazy(() => import("pages/LikedProducts"));

export const privateRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  { key: "auth", path: AUTH, Component: Auth },
  { key: "profile", path: PROFILE, Component: Profile },
  // { key: "editProfile", path: EDIT_PROFILE, Component: EditProfile },
  // { key: "messages", path: MESSSAGES, Component: Messages },
  // { key: "likedProducts", path: LIKED_PRODUCTS, Component: LikedProducts },
  { key: "postProduct", path: POST_MOTO, Component: PostMoto },
];

export const navRoutes: INavRoutes[] = [
  {
    key: "Barcha e'lonlar",
    path: MOTOCYCLES,
  },
];
