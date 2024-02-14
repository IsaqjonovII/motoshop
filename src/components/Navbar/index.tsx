import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import StyledNav from "./style";
import { motoLogo } from "assets";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
import { SearchNavbar } from "components/Search";

const { HOME, AUTH, PROFILE, MOTOCYCLES } = routes;
const Navbar = () => {
  const user = useAppSelector(({ auth }) => auth.user);
  return (
    <StyledNav>
      <div className="nav__container">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to={HOME}>
              <img src={motoLogo} alt="motoshop" />
            </Link>
          </div>
          <nav className="nav__menu">
            <Link to={MOTOCYCLES} className="menu__item">
              E'lonlar
            </Link>
          </nav>
        </div>
        <SearchNavbar />
        <div className="nav__right">
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
