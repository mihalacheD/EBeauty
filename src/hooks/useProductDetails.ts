import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
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


const useProductDetails = (productId: number) => {

  const [product, setProduct] = useState<ProductDetails | null>(null)
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {

    if (!productId) return; // Nu face request dacă productId nu e valid

  const controller = new AbortController()
  setLoading(true)

  axios
     .get(`${options.url}/${productId}`, { params: options.params, signal: controller.signal })
     .then((res) => {
      setProduct(res.data || null);
      setLoading(false)
    })
     .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message || "Failed to fetch product details.");
        setLoading(false)
      })
        return () => controller.abort()
  }, [productId])

  return { product, error, isLoading}
}

export default useProductDetails;