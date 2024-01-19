import { lazy } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import StyledAuth from "./style";
import { routes } from "constants/routes";

const { HOME } = routes;
const items: TabsProps["items"] = [
  {
    key: "login",
    label: "Kirish",
    children: <Login />,
  },
  {
    key: "register",
    label: "Ro'yhatdan o'tish",
    children: <Register />,
  },
];

const Auth = () => (
  <StyledAuth>
    <Link to={HOME} className="back">
      {" "}
      <AiOutlineArrowLeft /> Ortga qaytish
    </Link>
    <Tabs
      defaultActiveKey="login"
      tabBarStyle={{
        borderColor: "teal",
      }}
      items={items}
      size="large"
    />
  </StyledAuth>
);

export default Auth;
