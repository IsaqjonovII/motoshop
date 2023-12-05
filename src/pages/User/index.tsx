import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Ads } from "pages/Ads";
import { Messages } from "./Tabs";
import StyledProfile from "./style";
import { LastSeen } from "./Tabs/LastSeen";
import { SavedBikes } from "./Tabs/SavedBikes";
import { User } from "components/Sidebar/User";
import { useAppSelector } from "hooks";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "constants/routes";

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
        <React.Fragment>
          <User />
          <div className="profile__content">
            <Tabs defaultActiveKey="msg" size="large" items={user_tabs} />
          </div>
        </React.Fragment>
      )}
    </StyledProfile>
  );
};

export default UserProfile;
