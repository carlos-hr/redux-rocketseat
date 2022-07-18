import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Product } from "../store/modules/cart/types";
import CatalogItem from "./CatalogItem";

const Catalog = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    api.get("products").then((res) => setCatalog(res.data));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Catalog;
