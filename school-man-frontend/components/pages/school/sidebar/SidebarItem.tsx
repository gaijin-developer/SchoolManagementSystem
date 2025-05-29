import { Link } from "@/i18n/navigation";
import React from "react";

type Props = { routeDestination: string; label: string };

const SidebarItem = ({ routeDestination, label }: Props) => {
  return (
    <Link href={routeDestination} className="py-2 text-center">
      {label}
    </Link>
  );
};

export default SidebarItem;
