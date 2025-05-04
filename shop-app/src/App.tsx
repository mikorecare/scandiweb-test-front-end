import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./services/api.services";
import Header from "./components/header/header";
import ProductCard from "./components/cards/product-card.component";
import { Product } from "./models/products/product.abstract.class";
import { CardProps } from "./models/props/card.prop.class";
import Heading from "./components/headings/heading";
import ProductContainer from "./components/containers/product.container";

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
      <div className="page-container layout-padding">
        <div className="flex flex-col pl-auto">
          <Heading />
          <ProductContainer>
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  cardProps={new CardProps(product)}
                />
              ))}
          </ProductContainer>
        </div>
      </div>
    </>
  );
}

export default App;
