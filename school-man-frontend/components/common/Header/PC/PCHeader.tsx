import React from "react";
import Logo from "./Logo";

import LangugaeSwitcher from "../LanguageSwitcher/LangugaeSwitcher";
import HeaderNavigation from "./HeaderNavigation";
import Link from "next/link";
import AuthButtons from "../AuthButtons/AuthButtons";

function PCHeader() {
  return (
    <div className="p-4 flex justify-between">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center gap-6">
        <div>
          <HeaderNavigation />
        </div>
        <div className="flex items-center gap-2">
          <AuthButtons />
          <LangugaeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default PCHeader;
