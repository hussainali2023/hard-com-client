import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>This is Error Page </p>
      <Link to={"/"}>Go To Home</Link>
    </div>
  );
};

export default ErrorPage;
