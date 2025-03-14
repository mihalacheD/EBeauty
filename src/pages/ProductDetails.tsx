import { Spinner, Text, Image, Box, Grid } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useProductDetails from "../hooks/useProductDetails";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import TopProducts from "../components/TopProducts";



const ProductDetails = () => {

  const { id } = useParams<{id: string}>()
  const productId = Number(id)
  const { product, error, isLoading} = useProductDetails(productId)


  if (isLoading) return <Spinner/>
  if (error) return <Text color="red.500">Error: {error}</Text>;



  return (
<>
  {product ? (
    <Box maxW="1900px" mx="auto" px={{ base: 2, md: 4 }} mb={10}>
      <Box p={9}>
        <Text fontSize="4xl" fontWeight="medium" textAlign="center" mb={5}>
          {product.title}
        </Text>
        <Text fontSize="2xl">{product.description}</Text>
      </Box>

      {/* Grid pentru organizarea layout-ului */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 2fr" }} // Grid responsive
        gap={4}
        alignItems="flex-start"
      >
        {/* Imaginea produsului */}
        <Image
          src={product.thumbnail}
          alt={product.title}
          width="100%"
        />

        {/* ProductDetailsInfo și ProductDetailsCard */}
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={4}>
          <ProductDetailsInfo product={product} />
          <ProductDetailsCard product={product} />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Text>No product found.</Text>
  )}
  <TopProducts />
</>
  )
}

export default ProductDetails
