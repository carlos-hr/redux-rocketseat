import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { Product } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: Product;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<State, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <br />
      <strong>{product.title}</strong>
      {" - "}
      <span>{product.price}</span>
      {"  "}

      <button type="button" onClick={handleAddToCart}>
        Comprar
      </button>

      {hasFailedStockCheck && (
        <span style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          Fora de estoque
        </span>
      )}
    </article>
  );
};

export default CatalogItem;
