import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Footer from "../Pages/Shared/Footer/Footer";

import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 md:w-80 bg-blue-500 text-white md:text-black md:bg-gray-100">
            <li>
              <Link to="/dashboard/my-orders">My Orders</Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-product">My Product</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/all-seller">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-buyer">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashboardLayout;
