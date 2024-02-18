import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "routes";
import Navbar from "components/Navbar";
import Container from "components/Container";
import NotFound from "pages/NotFound";
import { useAppSelector } from "hooks";
import Footer from "components/Footer";

function App() {
  const user = useAppSelector(({ auth }) => auth.user);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isAuthRoute = ["/auth"].includes(pathname);

  return (
    <div className="app">
      {!isAuthRoute && (
        <div className="container__nav">
          <Navbar />
        </div>
      )}
      <Container>
        <Routes>
          {(user ? privateRoutes : publicRoutes).map(
            ({ key, path, Component }) => (
              <Route key={key} path={path} element={<Component />} />
            )
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
