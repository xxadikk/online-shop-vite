import React from "react";
import MenuTop from "./MenuTop";
import MenuBottom from "./MenuBottom";

const Menu = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <MenuTop />
        <MenuBottom />
      </div>
    </div>
  );
};

export default Menu;
