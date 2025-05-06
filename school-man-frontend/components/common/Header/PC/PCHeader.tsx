import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import LangugaeSwitcher from "../LanguageSwitcher/LangugaeSwitcher";
import HeaderNavigation from "./HeaderNavigation";

function PCHeader() {
  return (
    <div className="p-4 border-b-3 flex justify-between">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div>
        <HeaderNavigation />
      </div>
      <div>
        <LangugaeSwitcher />
      </div>
    </div>
  );
}

export default PCHeader;
