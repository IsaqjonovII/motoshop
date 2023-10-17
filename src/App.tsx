import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "routes";

function App() {
  return (
    <div className="app">
      <div className="container__nav">
        <Navbar />
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
