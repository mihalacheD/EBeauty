import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { Box, Container, Text } from "@chakra-ui/react";


const TopProducts = () => {

  const { products } = useProducts();
  const topRatedProducts = [...products].sort((a, b) => b.rating - a.rating);



    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            dotsClass: "slick-dots slick-thumb"
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true,
            dotsClass: "slick-dots slick-thumb"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    };
  return (
    <div className="slider-container">
       <Container bg="#ff1d25" w="100%" p={4} display="flex" justifyContent="center" my={9} >
        <Text color='white' fontSize='2xl'fontWeight='bolder'>Top Products</Text>
      </Container>
       <Container w="100%" my={9}>
      <Slider {...settings}>
        {topRatedProducts.map((product) => (
          <Box key={product.id} h={{ sm:"550px", lg: "600px"}} p={{ sm: '1', md: "2", lg: '3'}} >
            <ProductCard product={product} />
          </Box>
        ))}
      </Slider>
    </Container>
    </div>
    )
  }

export default TopProducts;

