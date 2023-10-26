import { lazy } from "react";
import { routes } from "constants/routes";
import { IAppRoutes, INavRoutes } from "interfaces";
const Home = lazy(() => import("pages/Home"));

const {
  HOME,
  LOGIN,
  REGISTER,
  // ELECTRO_MOTO,
  // EMOTO_INFO,
  // MOTOCYCLES,
  // SPORTBIKES,
  // SPORTBIKE_INFO,
  // SCOOTER,
  // SCOOTER_INFO,
  // MOTOSTUFF,
  // MOTOSTUFF_INFO,
  // ACCESSORIES,
  // ACCESSORIES_INFO,
  // HELMETS,
  // HELMET_INFO,
  // PROFILE,
  // EDIT_PROFILE,
  // MESSSAGES,
  // LIKED_PRODUCTS,
  // POST_PRODUCT,
} = routes;

const Login = lazy(() => import("pages/Auth/Login"));
const Register = lazy(() => import("pages/Auth/Register"));
// const ElectroMoto = lazy(() => import("pages/ElectroMoto"));
// const EmotoInfo = lazy(() => import("pages/EmotoInfo"));
// const Motocycles = lazy(() => import("pages/Motocycles"));
// const Sportbikes = lazy(() => import("pages/Sportbikes"));
// const SportbikeInfo = lazy(() => import("pages/SportbikeInfo"));
// const Scooter = lazy(() => import("pages/Scooter"));
// const ScooterInfo = lazy(() => import("pages/ScooterInfo"));
// const Motostuff = lazy(() => import("pages/Motostuff"));
// const MotostuffInfo = lazy(() => import("pages/MotostuffInfo"));
// const Accessories = lazy(() => import("pages/Accessories"));
// const AccessoriesInfo = lazy(() => import("pages/AccessoriesInfo"));
// const Helmets = lazy(() => import("pages/Helmets"));
// const HelmetInfo = lazy(() => import("pages/HelmetInfo"));
// const Profile = lazy(() => import("pages/Profile"));
// const EditProfile = lazy(() => import("pages/EditProfile"));
// const Messages = lazy(() => import("pages/Messages"));
// const LikedProducts = lazy(() => import("pages/LikedProducts"));
// const PostProduct = lazy(() => import("pages/PostProduct"));

// Define the routes using object destructuring
export const publicRoutes: IAppRoutes[] = [
  { key: "login", path: LOGIN, Component: Login },
  { key: "register", path: REGISTER, Component: Register },
];
export const privateRoutes: IAppRoutes[] = [
  { key: "home", path: HOME, Component: Home },
  // { key: "login", path: LOGIN, Component: Login },
  // { key: "register", path: REGISTER, Component: Register },
  // { key: "electroMoto", path: ELECTRO_MOTO, Component: ElectroMoto },
  // { key: "emotoInfo", path: EMOTO_INFO, Component: EmotoInfo },
  // { key: "motocycles", path: MOTOCYCLES, Component: Motocycles },
  // { key: "sportbikes", path: SPORTBIKES, Component: Sportbikes },
  // { key: "sportbikeInfo", path: SPORTBIKE_INFO, Component: SportbikeInfo },
  // { key: "scooter", path: SCOOTER, Component: Scooter },
  // { key: "scooterInfo", path: SCOOTER_INFO, Component: ScooterInfo },
  // { key: "motostuff", path: MOTOSTUFF, Component: Motostuff },
  // { key: "motostuffInfo", path: MOTOSTUFF_INFO, Component: MotostuffInfo },
  // { key: "accessories", path: ACCESSORIES, Component: Accessories },
  // {
  //   key: "accessoriesInfo",
  //   path: ACCESSORIES_INFO,
  //   Component: AccessoriesInfo,
  // },
  // { key: "helmets", path: HELMETS, Component: Helmets },
  // { key: "helmetInfo", path: HELMET_INFO, Component: HelmetInfo },
  // { key: "profile", path: PROFILE, Component: Profile },
  // { key: "editProfile", path: EDIT_PROFILE, Component: EditProfile },
  // { key: "messages", path: MESSSAGES, Component: Messages },
  // { key: "likedProducts", path: LIKED_PRODUCTS, Component: LikedProducts },
  // { key: "postProduct", path: POST_PRODUCT, Component: PostProduct },
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
