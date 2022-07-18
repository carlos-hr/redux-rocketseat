import { Reducer } from "redux";
import { ActionTypes, CartState } from "./types";
import produce from "immer";

const initialState: CartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<CartState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess:
        const { product } = action.payload;

        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      case ActionTypes.addProductToCartFailure:
        draft.failedStockCheck.push(action.payload.productId);
        break;
      default:
        return draft;
    }
  });
};

export default cart;
