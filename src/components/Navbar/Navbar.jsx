import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-500 flex justify-between px-6 py-5 font-regular">
      <ul className="flex gap-8 text-base">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-white font-bold" : "text-red-100"
          }
        >
          <li>🏠 Home</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-white font-bold" : "text-red-100"
          }
        >
          <li>✉️ Contact</li>
        </NavLink>
      </ul>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-white font-bold text-xl"
            : "text-white text-xl"
        }
      >
        <p>Happy Cake 🍰</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
