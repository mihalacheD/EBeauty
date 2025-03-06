import axios from "axios"
import { useEffect, useState } from "react"
import options from "../services/api-client"


interface Product {
  id: number,
  title: string
}


const Products = () => {
 const [products, setProduducts] = useState<Product[]>([])
 const [error, setError] = useState("")

 useEffect(() => {
  axios
    .get(options.url, {params: options.params})
    .then((res) => {
      setProduducts(res.data.products)
      })
    .catch(error => setError(error.message))
 }, [])

 return (
  <>
    {error && <p>{error}</p>}
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  </>
);
};


export default Products
