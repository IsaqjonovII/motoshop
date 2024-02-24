import { Fragment } from "react";
import { Tabs, type TabsProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import StyledProfile from "./style";
import { routes } from "constants/routes";
import { logOut } from "store/reducers/AuthSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import Ads from "./Tabs/Ads";
import { Text } from "components/Text";
import LastSeen from "./Tabs/LastSeen";
import SavedBikes from "./Tabs/SavedBikes";
import Settings from "./Tabs";
import { Button } from "components/Button";

const user_tabs: TabsProps["items"] = [
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
  {
    key: "settings",
    label: "Sozlamalar",
    children: <Settings />,
  },
];
const { AUTH } = routes;
const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ auth }) => auth.user);

  const logOutUser = () => {
    if (confirm("Rostan ham tizimdan chiqmoqchimisiz?")) {
      dispatch(logOut());
      navigate("/");
    }
  };

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
          <div className="profile__user">
            <div className="user__avatar">
              <div>
                <Text size="lg">{user?.name}</Text>
                <Text size="md" bold={600}>
                  +{user?.phone}
                </Text>
              </div>
            </div>

            <div className="user__actions flex">
              <Button className="logout__btn" onClick={logOutUser}>
                Hisobdan chiqish
              </Button>
            </div>
          </div>
          <div className="user__tabs">
            <Tabs defaultActiveKey="msg" size="large" items={user_tabs} />
          </div>
        </Fragment>
      )}
    </StyledProfile>
  );
};

export default UserProfile;
