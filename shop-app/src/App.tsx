import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./services/api.services";
import Header from "./components/header/header";
import ProductCard from "./components/cards/product-card.component";
import { Product } from "./models/products/product.abstract.class";
import { CardProps } from "./models/props/card.prop.class";

function App() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await fetchData());
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="p-5 d-flex flex-wrap gap-5 ">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} cardProps={new CardProps(product)} />
          ))}
      </div>
    </>
  );
}

export default App;
