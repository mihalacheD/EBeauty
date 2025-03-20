import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import options from "../services/api-client";
import ms from "ms";
import { Product } from "./useProducts"; // Importăm interfața Product

const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`, options);
  return response.data;
};

const useWishlistProducts = (wishlist: number[]) => {
  return useQueries({
    queries: wishlist.map((id) => ({
      queryKey: ["product", id],
      queryFn: () => fetchProductById(id),
      staleTime: ms("168h"),
    })),
  });
};

export default useWishlistProducts;
