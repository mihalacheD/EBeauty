import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";


export interface Category {
  slug: string;
  name: string;
  url: string;
}

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get("https://dummyjson.com/products/categories", {
        signal: controller.signal,
      })
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { categories, error, isLoading };
};

export default useCategory;
