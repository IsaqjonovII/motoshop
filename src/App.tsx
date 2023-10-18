import { useState } from "react";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false);
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
    </div>
  );
}

export default App;
