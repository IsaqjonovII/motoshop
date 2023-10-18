import { Link } from "react-router-dom";
import { navRoutes } from "routes";
import { HiOutlineChevronRight } from "react-icons/hi2";
import StyledSidebar from "./style";
import { ISidebar } from "interfaces";

const Sidebar = ({ isSidebarOpen }: ISidebar) => {
  return (
    <StyledSidebar
      className={isSidebarOpen ? "sidebar sidebar__opened" : "sidebar"}
    >
      <div className="sidebar__links">
        {navRoutes.map(({ key, path }) => (
          <div key={key} className="sidebar__link">
            <Link to={path}>{key}</Link>
            <HiOutlineChevronRight />
          </div>
        ))}
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
