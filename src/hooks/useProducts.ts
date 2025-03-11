import axios, { CanceledError } from "axios"
import { useState, useEffect } from "react"
import options from "../services/api-client"


export interface Product {
  id: number,
  title: string,
  thumbnail: string,
  rating: number,
  price: number,
  category: string,
  brand: string,
  discountPercentage: number,
  stock: number,
  createdAt: Date
}

const useProducts = (category?: string) => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {

  const controller = new AbortController()
  setLoading(true)

   axios
     .get(
     category
     ? `https://dummyjson.com/products/category/${category}`
     : options.url,
   {
     params: options.params,
     signal: controller.signal,
   }
  )
     .then((res) => {
       // Adăugăm un rating aleatoriu fiecărui produs
       const updatedProducts = res.data.products.map((product: Product) => ({
        ...product,
        rating: Math.floor(Math.random() * 5) + 1, // Rating aleatoriu între 1 și 5
      }));
      setProducts(updatedProducts);
      setLoading(false)
    })
     .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message)
        setLoading(false)
      })
        return () => controller.abort()
  }, [category])

  return { products, error, isLoading}
}

export default useProducts;
