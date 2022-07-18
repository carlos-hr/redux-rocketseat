import { legacy_createStore as createStore } from "redux";
import { CartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

export interface State {
  cart: CartState;
}

const store = createStore(rootReducer);

export default store;
