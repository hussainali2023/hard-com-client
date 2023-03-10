import { createBrowserRouter } from "react-router-dom";
// import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
// import AddProduct from "../Pages/AddProduct";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct";
import Payment from "../Pages/Dashboard/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CategoryProduct from "../Pages/Home/CategoryProduct/CategoryProduct";
import DetailsProduc from "../Pages/Home/DetailsProduct/DetailsProduc";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/category/:id",
        element: <CategoryProduct></CategoryProduct>,
        loader: ({ params }) =>
          fetch(
            `https://hard-com-server.vercel.app/category/type/${params.id}`
          ),
      },

      {
        path: "/product/:id",
        element: <DetailsProduc></DetailsProduc>,
        loader: ({ params }) =>
          fetch(`https://hard-com-server.vercel.app/product/${params.id}`),
      },
      {
        path: "/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/my-product",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/all-buyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/all-seller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
