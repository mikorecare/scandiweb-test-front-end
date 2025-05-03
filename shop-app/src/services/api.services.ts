import { Product } from "../models/products/product.abstract.class";

export const fetchData = async (): Promise<Product[]> => {
  try {
    const data = await fetch("/data/data.json");
    const result = await data.json();

    if (result) {
       console.table(result.data.products);
      return result.data.products;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
