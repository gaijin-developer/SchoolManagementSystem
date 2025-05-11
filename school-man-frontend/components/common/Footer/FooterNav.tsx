import React from "react";
import FooterNavItem from "./FooterNavItem";
import { FooterItem } from "@/types/footerElement";
import { useTranslations } from "next-intl";

function FooterNav() {
  const t = useTranslations("HomePage");
  const list = t.raw("footer.footer-nav");

  return (
    <nav className="flex flex-col items-center py-4 ">
      {list.map((footerItem: FooterItem) => (
        <div key={footerItem.label}>
          <FooterNavItem navLabel={footerItem.label} url={footerItem.url} />
        </div>
      ))}
    </nav>
  );
}

export default FooterNav;
