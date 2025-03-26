import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import options from "../services/api-client";
import ms from "ms";
import { Review } from "./useProductDetails";

// Extindem Product pentru a include toate câmpurile necesare
export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  rating: number;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  createdAt: string;
  updatedAt: string;
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
    staleTime: ms('168h')
  });
};

export default useProducts;
