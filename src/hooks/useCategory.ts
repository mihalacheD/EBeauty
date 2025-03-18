import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategory = () => {

  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/products/categories");
      return response.data
    }
  })
}

export default useCategory;
