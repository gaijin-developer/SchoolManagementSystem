import React from "react";
import PCHeader from "./PC/PCHeader";
import MobileHeader from "./Mobile/MobileHeader";

function Header() {
  return (
    <header>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block"></div> <PCHeader />
    </header>
  );
}

export default Header;
