import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Logo from "../../../assests/Screenshot 2023-03-04 114954.jpg";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSeller";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listItems = (
    <React.Fragment>
      <li className="zoom">
        <Link to="/">Home</Link>
      </li>
      <li className="zoom">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid && (
        <>
          <li className="zoom">
            <Link to="/my-orders">My Orders</Link>
          </li>
        </>
      )}
      {user?.uid && isSeller && (
        <>
          <li className="zoom">
            <Link to="/add-product">Add Product</Link>
          </li>
          <li className="zoom">
            <Link to="/my-product">My Product</Link>
          </li>
        </>
      )}
      {isAdmin && (
        <>
          <li className="zoom">
            <Link to="/all-seller">All Sellers</Link>
          </li>
          <li className="zoom">
            <Link to="/all-buyer">All Buyers</Link>
          </li>
        </>
      )}
      {/* {user?.uid && (
        <>
          {" "}
          <li className="zoom">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      )} */}
      {user?.uid ? (
        <>
          <li className="zoom">
            <button
              onClick={handleLogOut}
              className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-500"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="zoom">
            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full h-12 px-6 tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-500"
            >
              Login
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div>
      {/* ---------------Upper Part------------ */}
      <div className="text-sm py-1 bg-orange-300 text-center">
        Need Help?&nbsp; Call Us: (+91) 9064198653 &nbsp;&nbsp;| &nbsp; Email
        Us: info@hardcom.com
      </div>
      {/* --------------Main Navbar------------------------ */}
      <div>
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <label
              htmlFor="dashboard-drawer"
              className="btn text-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <Link to="/" className="inline-flex items-center">
              <img src={Logo} alt="" className=" h-16" />
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex text-black font-medium">
              {listItems}
            </ul>

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-black" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute z-50 top-0 left-0 w-full">
                  <div className="p-5 bg-white rounded">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" className="inline-flex items-center">
                          <img src={Logo} alt="" className=" h-16" />
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-black" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4 text-black">{listItems}</ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
