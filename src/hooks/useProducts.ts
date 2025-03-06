import axios, { CanceledError } from "axios"
import { useState, useEffect } from "react"
import options from "../services/api-client"


export interface Product {
  id: number,
  title: string,
  thumbnail: string,
  rating: number
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState("")

  useEffect(() => {

  const controller = new AbortController()

   axios
     .get(options.url, {params: options.params, signal: controller.signal})
     .then((res) => {
       // Adăugăm un rating aleatoriu fiecărui produs
       const updatedProducts = res.data.products.map((product: Product) => ({
        ...product,
        rating: Math.floor(Math.random() * 5) + 1, // Rating aleatoriu între 1 și 5
      }));
      setProducts(updatedProducts);
    })
     .catch(error => {
        if (error instanceof CanceledError) return
        setError(error.message)
      })
        return () => controller.abort()
  }, [])

  return { products, error}
}

export default useProducts;
