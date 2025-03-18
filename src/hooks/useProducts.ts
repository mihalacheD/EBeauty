import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import options from "../services/api-client";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  rating: number;
  price: number;
  category: string;
  brand: string;
  discountPercentage: number;
  stock: number;
  createdAt: Date;
}

const useProducts = (category?: string, searchText?: string) => {

  return useQuery<Product[], Error>({
    queryKey: ["products", category, searchText], // Adăugăm category și searchText pentru a reexecuta request-ul când se schimbă
    queryFn: async () => {
      let url = "https://dummyjson.com/products";
      if (category) {
        url = `https://dummyjson.com/products/category/${category}`;
      }
      if (searchText) {
        url = `https://dummyjson.com/products/search?q=${searchText}`;
      }

      const response = await axios.get(url, options);
      return response.data.products.map((product: Product) => ({
        ...product,
        rating: Math.floor(Math.random() * 5) + 1, // Adăugăm un rating aleatoriu
      }));
    },
  });
};

export default useProducts;
