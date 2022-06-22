import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";

import { rootSage } from "./root-sage";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const segaMiddleware = createSagaMiddleware();

const middleWare = [
  process.env.NODE_ENV === "development" && logger,
  // thunk
  segaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

segaMiddleware.run(rootSage);

export const persistor = persistStore(store);
