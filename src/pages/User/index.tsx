import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Fragment, lazy } from "react";
import { Link } from "react-router-dom";
import StyledProfile from "./style";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
const Messages = lazy(() => import("./Tabs"));
const Ads = lazy(() => import("./Tabs/Ads"));
const LastSeen = lazy(() => import("./Tabs/LastSeen"));
const SavedBikes = lazy(() => import("./Tabs/SavedBikes"));
const User = lazy(() => import("components/Sidebar/User"));

const user_tabs: TabsProps["items"] = [
  {
    key: "msg",
    label: "Xabarlar",
    children: <Messages />,
  },
  {
    key: "posted-ads",
    label: "E'lonlar",
    children: <Ads />,
  },
  {
    key: "saved",
    label: "Saqlanganlar",
    children: <SavedBikes />,
  },
  {
    key: "lastSeen",
    label: "Oxirgi ko'rilgan",
    children: <LastSeen />,
  },
];
const { AUTH } = routes;
const UserProfile = () => {
  const user = useAppSelector(({ auth }) => auth.user);

  return (
    <StyledProfile>
      {!user ? (
        <div className="need__auth">
          <p>
            Siz tizimga kirishingiz kerak! <Link to={AUTH}>Kirish</Link>
          </p>
        </div>
      ) : (
        <Fragment>
          <User />
          <div className="profile__content">
            <Tabs defaultActiveKey="msg" size="large" items={user_tabs} />
          </div>
        </Fragment>
      )}
    </StyledProfile>
  );
};

export default UserProfile;
