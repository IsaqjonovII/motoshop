import { Avatar, Tabs } from "antd";
import type { TabsProps } from "antd";
import StyledProfile from "./style";
import { useAppSelector } from "hooks";
import { logoutIcon, setttingsIcon } from "assets";
import { Messages } from "./Tabs";
import { SavedBikes } from "./Tabs/SavedBikes";
import { LastSeen } from "./Tabs/LastSeen";

const user_tabs: TabsProps["items"] = [
  {
    key: "msg",
    label: "Xabarlar",
    children: <Messages />,
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
const UserProfile = () => {
  const user = useAppSelector(({ auth }) => auth.user);
  return (
    <StyledProfile>
      <div className="profile__user">
        <div className="user__avatar">
          <Avatar
            className="avatar__img"
            src="https://api.dicebear.com/7.x/fun-emoji/svg?eyes=closed&mouth=lilSmile"
            size={{ xs: 24, sm: 32, md: 40, lg: 60, xl: 70, xxl: 80 }}
          />
          <div>
            <div className="user__name">{user?.name}</div>
            <div className="info__detail">+{user?.phone}</div>
          </div>
        </div>

        <hr />
        <div className="user__ads">
          <button className="ad__btn">E'lon berish</button>
        </div>

        <hr />

        <div className="user__actions">
          <div className="action__wrp flex" role="button" tabIndex={0}>
            <img className="action__icon" src={logoutIcon} alt="logout icon" />
            <span>Chiqish</span>
          </div>
          <div className="action__wrp flex" role="button" tabIndex={0}>
            <img
              className="action__icon"
              src={setttingsIcon}
              alt="settings icon"
            />
            <span>Sozlamalar</span>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <Tabs defaultActiveKey="msg" size="large" items={user_tabs} />
      </div>
    </StyledProfile>
  );
};

export default UserProfile;
