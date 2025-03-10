import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AllProducts from "../pages/AllProducts";





const router = createBrowserRouter([
  { path: '/', element: <Layout/>,
  children: [
    {index: true, element: <HomePage/>},
    { path: 'all-products', element: <AllProducts /> }
  ]
}
])

export default router;