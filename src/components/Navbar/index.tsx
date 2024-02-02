import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navRoutes } from "routes";
import StyledNav from "./style";
import { motoLogo } from "assets";
import { ISidebar } from "interfaces";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
import { SearchNavbar } from "components/Search";

const { HOME, AUTH, PROFILE } = routes;
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: ISidebar) => {
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
            {navRoutes.map(({ key, path }) => (
              <Link key={key} to={path} className="menu__item" aria-label={key}>
                {key}
              </Link>
            ))}
          </nav>
        </div>
        <SearchNavbar />
        <div className="nav__right">
          {user ? (
            <Link to={PROFILE}>
              <div className="user__wrp">
                <AiOutlineUser />
                <span>{user.name}</span>
              </div>
            </Link>
          ) : (
            <Link className="login__link" to={AUTH}>
              Kirish
            </Link>
          )}
          {isSidebarOpen ? (
            <AiOutlineClose
              className="bars__icon"
              onClick={() => setIsSidebarOpen(false)}
            />
          ) : (
            <AiOutlineMenu
              className="bars__icon"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
