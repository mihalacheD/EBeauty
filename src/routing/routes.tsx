import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AllProducts from "../pages/AllProducts";
import Beauty from "../pages/Beauty";





const router = createBrowserRouter([
  { path: '/', element: <Layout/>,
  children: [
    {index: true, element: <HomePage/>},
    { path: 'all-products', element: <AllProducts /> },
    { path: "category/beauty", element: <Beauty /> },
  ]
}
])

export default router;