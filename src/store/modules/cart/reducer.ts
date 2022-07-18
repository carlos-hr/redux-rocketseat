import { Reducer } from "redux";
import { CartState } from "./types";
import produce from "immer";

const initialState: CartState = {
  items: [],
};

const cart: Reducer<CartState> = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
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

      default:
        return draft;
    }
  });
};

export default cart;
