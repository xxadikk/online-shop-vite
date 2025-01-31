import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuBottom = () => {
  const { pathname } = useLocation();
  return (
    <div className="menu-bottom">
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={pathname === "/" ? "active" : ""}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={pathname === "/products" ? "active" : ""}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" className={pathname === "/news" ? "active" : ""}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={pathname === "/faq" ? "active" : ""}>
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBottom;
