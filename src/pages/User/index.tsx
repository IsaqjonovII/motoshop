import { Fragment, lazy } from "react";
import { Link } from "react-router-dom";
import StyledProfile from "./style";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
const UserSidebar = lazy(() => import("components/Sidebar/User"));

const { AUTH } = routes;
const UserProfile = () => {
  const user = useAppSelector(({ auth }) => auth.user);

  return (
    <StyledProfile>
      {!user ? (
        <div className="need__auth">
          <p>
            Siz hisobingizga kirishingiz kerak! <Link to={AUTH}>Kirish</Link>
          </p>
        </div>
      ) : (
        <Fragment>
          <UserSidebar>
            <></>
          </UserSidebar>
        </Fragment>
      )}
    </StyledProfile>
  );
};

export default UserProfile;
