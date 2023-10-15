import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { navRoutes } from "routes";
import StyledNav from "./style";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="nav__container">
        <div className="nav__left">
          <Link to="/">
            <div className="nav__logo">MotoShop</div>
          </Link>
          <nav className="nav__menu">
            {navRoutes.map(({ key, path }) => (
              <Link key={key} to={path} className="menu__item" aria-label={key}>
                {key}
              </Link>
            ))}
          </nav>
        </div>
        <div className="nav__right">
          <div className="user__wrp">
            <FiUser />
            <span>Profil</span>
          </div>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
