import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Login from "./Login";
import StyledAuth from "./style";
import Register from "./Register";
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
      <ArrowLeftOutlined /> Ortga qaytish
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
