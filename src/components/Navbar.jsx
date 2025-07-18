import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b-1 border-[#273a50] pb-2">
      <nav className="flex list-none justify-between gap-3 mx-[1.2rem] mt-0 pt-2  font-sans font-extrabold text-[#3E5B7A] cursor-pointer sm:text-xl md:text-2xl">
        <li className=" hover:text-[#5c86b4]">
          <Link to="/">HOME</Link>
        </li>
        <ul className="flex justify-between gap-[1.5rem] ">
          <li className=" hover:text-[#5c86b4]">
            <Link to="/children">CHILDREN</Link>
          </li>
          <li className=" hover:text-[#5c86b4]">
            <Link to="/adult">HINDI </Link>
          </li>
          <li className=" hover:text-[#5c86b4]">
            <Link to="/form">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
