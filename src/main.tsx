import { Suspense} from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import { store, persistor } from "store";
import { Spinner } from "components/Loader";
import { GlobalStyle } from "styles/index.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <ToastContainer
      position="bottom-center"
      autoClose={1000}
      newestOnTop={true}
      closeOnClick
      theme="light"
    />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner isLoading={true} />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  </>
);
