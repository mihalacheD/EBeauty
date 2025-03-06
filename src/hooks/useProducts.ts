import axios, { CanceledError } from "axios"
import { useState, useEffect } from "react"
import options from "../services/api-client"


export interface Product {
  id: number,
  title: string,
  thumbnail: string
}

const useProducts = () => {
  const [products, setProduducts] = useState<Product[]>([])
  const [error, setError] = useState("")

  useEffect(() => {

  const controller = new AbortController()

   axios
     .get(options.url, {params: options.params, signal: controller.signal})
     .then((res) => {
       setProduducts(res.data.products)
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
