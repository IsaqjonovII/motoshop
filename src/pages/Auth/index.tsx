import { lazy } from "react";
import { Tabs, type TabsProps } from "antd";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import StyledAuth from "./style";

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

const Auth = () => {
  const navigate = useNavigate();
  const handleGoingBack = () => navigate(-1);
  return (
    <StyledAuth>
      <div className="back" onClick={handleGoingBack}>
        {" "}
        <AiOutlineArrowLeft /> Ortga qaytish
      </div>
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
};
export default Auth;
