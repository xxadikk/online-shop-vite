import React from "react";
import DiscountMessage from "./DiscountMessage";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div>
        <DiscountMessage />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
