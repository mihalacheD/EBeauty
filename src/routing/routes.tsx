import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AllProducts from "../pages/AllProducts";
import Beauty from "../pages/Beauty";
import Frangrances from "../pages/Frangrances";
import Clothing from "../pages/Clothing";
import Skincare from "../pages/Skincare";





const router = createBrowserRouter([
  { path: '/', element: <Layout/>,
  children: [
    {index: true, element: <HomePage/>},
    { path: 'all-products', element: <AllProducts /> },
    { path: "category/beauty", element: <Beauty /> },
    { path: "category/fragrances", element: <Frangrances /> },
    { path: "category/womens-dresses", element: <Clothing /> },
    { path: "category/skin-care", element: <Skincare /> },
  ]
}
])

export default router;