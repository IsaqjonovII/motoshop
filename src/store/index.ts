import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "services/auth";
import { adApi } from "services/ad";
import rootReducers from "./reducers";
import { userApi } from "services/user";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: ["adAPI", "userAPI"],
  },
  rootReducers
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      adApi.middleware,
      userApi.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
