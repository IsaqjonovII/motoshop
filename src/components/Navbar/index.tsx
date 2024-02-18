import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import StyledNav from "./style";
import { motoLogo } from "assets";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
import { Button } from "components/Button";

const { HOME, AUTH, PROFILE, POST_MOTO } = routes;
const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(({ auth }) => auth.user);

  const handlePostAd = () => {
    user ? navigate(POST_MOTO) : navigate(AUTH);
  };
  return (
    <StyledNav>
      <div className="nav__container">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to={HOME}>
              <img src={motoLogo} alt="motoshop" />
            </Link>
          </div>
        </div>

        <div className="nav__right">
          <Button className="right__btn" onClick={handlePostAd}>
            E'lon joylash
          </Button>
          {user ? (
            <Link to={PROFILE}>
              <div className="user__wrp">
                <AiOutlineUser className="icon" />
                <span>Profil</span>
              </div>
            </Link>
          ) : (
            <Link className="login__link" to={AUTH}>
              Kirish
            </Link>
          )}
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
