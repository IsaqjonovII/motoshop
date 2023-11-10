import { Avatar } from "antd";
import StyledProfile from "./style";
import { useAppSelector } from "hooks";

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
      </div>
      <div className="profile__content"></div>
    </StyledProfile>
  );
};

export default UserProfile;
