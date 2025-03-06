import useProducts from "../hooks/useProducts";


const Products = () => {
 const { products, error} = useProducts()

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
