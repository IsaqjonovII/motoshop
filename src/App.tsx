import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { appRoutes } from "routes";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setisSidebarOpen(false);
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div className="app">
      <div className="container__nav">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
        />
        {isSidebarOpen ? (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setisSidebarOpen}
          />
        ) : null}
      </div>

      <Routes>
        {appRoutes.map(({ key, path, Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
