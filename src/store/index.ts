import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { CartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

export interface State {
  cart: CartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
