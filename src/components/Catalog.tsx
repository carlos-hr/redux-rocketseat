import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { Product } from "../store/modules/cart/types";

const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    api.get("products").then((res) => setCatalog(res.data));
  }, []);

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <br />
          <strong>{product.title}</strong>
          {" - "}
          <span>{product.price}</span>
          {"  "}

          <button type="button" onClick={() => handleAddToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
