import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../assests/1aa5bfad9cb545e77ffe21fe2d3e2400.jpg";
import instagram from "../../../assests/1eb8557129457439e59a95b3e2f558a4.jpg";
import payments from "../../../assests/footer-icons-2.webp";

const Bottom = () => {
  return (
    <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 py-2 bg-black text-white ">
      <div className=" pl-16 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className=" flex ">
          <p>Copyright © 2023 HardCom | All rights reserved.</p>
        </div>
        <div>
          <p className=" flex">
            <Link to={"/"}>
              <img src={instagram} alt="" className=" h-8 w-8" />
            </Link>
            <Link to={"/"}>
              <img src={facebook} alt="" className=" h-10 w-12" />
            </Link>
          </p>
        </div>
      </div>
      <div>
        <img src={payments} alt="" className=" h-16" />
      </div>
    </div>
  );
};

export default Bottom;
