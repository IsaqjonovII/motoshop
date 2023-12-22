import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes } from "routes";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import NotFound from "pages/NotFound";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setisSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  const isAuthRoute = ["/auth"].includes(pathname);

  return (
    <div className="app">
      {!isAuthRoute && (
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
      )}
      <Container>
        <Routes>
          {privateRoutes.map(({ key, path, Component }) => (
            <Route key={key} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
