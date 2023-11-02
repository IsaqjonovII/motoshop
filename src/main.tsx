import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.tsx";
import { store } from "store";
import Loader from "components/Loader";
import { GlobalStyle } from "styles/index.ts";
import { ToastContainer } from "react-toastify";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      newestOnTop={true}
      closeOnClick
      theme="light"
    />
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
