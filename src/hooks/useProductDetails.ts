import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import options from "../services/api-client";

export interface ProductDetails {
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

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

const useProductDetails = (productId?: number) => {
  return useQuery<ProductDetails | null>({
    queryKey: ["productDetails", productId], // 🔹 Adăugăm productId în queryKey
    queryFn: async () => {
      if (!productId) return null; // 🔹 Oprim request-ul dacă nu există productId
      const response = await axios.get(`${options.url}/${productId}`, { params: options.params });
      return response.data || null;
    },
    retry: 3
  });
};

export default useProductDetails;
