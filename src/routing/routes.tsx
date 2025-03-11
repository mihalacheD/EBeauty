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





const router = createBrowserRouter([
  { path: '/', element: <Layout/>,
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
  ]
}
])

export default router;