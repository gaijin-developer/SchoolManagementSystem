import { Link } from "@/i18n/navigation";
import React from "react";

type Props = {
  navLabel: string;
  url: string;
};

function FooterNavItem({ navLabel, url }: Props) {
  return (
    <Link href={url} className="p-2 block">
      {navLabel}
    </Link>
  );
}

export default FooterNavItem;
