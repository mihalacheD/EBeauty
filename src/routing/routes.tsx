import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AllProducts from "../pages/AllProducts";
import Beauty from "../pages/Beauty";
import Frangrances from "../pages/Frangrances";
import Clothing from "../pages/Clothing";
import Skincare from "../pages/Skincare";
import Sunglasses from "../pages/Sunglasses";
import Tops from "../pages/Tops";
import Bags from "../pages/Bags";
import Accessories from "../pages/Accessories";
import Shoes from "../pages/Shoes";
import Watches from "../pages/Watches";
import ProductDetails from "../pages/ProductDetails";
import SearchResults from "../pages/SearchResults";
import ErrorPage from "./ErrorPage";
import Wishlist from "../pages/Wishlist";





const router = createBrowserRouter([
  { path: '/', element: <Layout/>,
    errorElement: <ErrorPage />,
  children: [
    {index: true, element: <HomePage/>},
    { path: 'all-products', element: <AllProducts /> },
    { path: "category/beauty", element: <Beauty /> },
    { path: "category/fragrances", element: <Frangrances /> },
    { path: "category/womens-dresses", element: <Clothing /> },
    { path: "category/skin-care", element: <Skincare /> },
    { path: "category/sunglasses", element: <Sunglasses /> },
    { path: "category/tops", element: <Tops /> },
    { path: "category/womens-bags", element: <Bags /> },
    { path: "category/womens-jewellery", element: <Accessories /> },
    { path: "category/womens-shoes", element: <Shoes /> },
    { path: "category/womens-watches", element: <Watches /> },
    { path: "/product/:id", element: <ProductDetails />},
    { path: "/search-results", element: <SearchResults />},
    { path: "/wishlist", element: <Wishlist />},
  ]
}
])

export default router;