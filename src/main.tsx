import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import { store, persistor } from "store";
import Loader from "components/Loader";
import { GlobalStyle } from "styles/index.ts";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
