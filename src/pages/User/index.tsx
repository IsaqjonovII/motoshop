import { Avatar, Tabs } from "antd";
import type { TabsProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Ads } from "pages/Ads";
import { Messages } from "./Tabs";
import StyledProfile from "./style";
import { LastSeen } from "./Tabs/LastSeen";
import { SavedBikes } from "./Tabs/SavedBikes";
import { logOut } from "store/reducers/AuthSlice";
import { logoutIcon, setttingsIcon } from "assets";
import { useAppDispatch, useAppSelector } from "hooks";
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
const { POST_MOTO } = routes;
const UserProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(({ auth }) => auth.user);
  const logOutUser = () => {
    if (confirm("Rostan ham tizimdan chiqmoqchimisiz?")) {
      dispatch(logOut());
      navigate("/");
    }
  };
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
          <Link to={POST_MOTO}>
            <button className="ad__btn">E'lon berish</button>
          </Link>
        </div>

        <hr />

        <div className="user__actions">
          <div
            className="action__wrp flex"
            role="button"
            tabIndex={0}
            onClick={logOutUser}
          >
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
