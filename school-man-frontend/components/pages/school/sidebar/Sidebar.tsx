import React from "react";
import SidebarItem from "./SidebarItem";
import { useTranslations } from "next-intl";

function Sidebar() {
  const t = useTranslations("School");
  return (
    <nav className="flex flex-col w-full">
      <SidebarItem
        routeDestination="/school/schoolId"
        label={t("sidebar.dashboard")}
      />
      <SidebarItem routeDestination="/students" label={t("sidebar.students")} />
      <SidebarItem routeDestination="/teachers" label={t("sidebar.teachers")} />
      <SidebarItem routeDestination="/records" label={t("sidebar.records")} />
      <SidebarItem routeDestination="/staff" label={t("sidebar.staff")} />
      <SidebarItem routeDestination="/programs" label={t("sidebar.programs")} />
      <SidebarItem
        routeDestination="/announcements"
        label={t("sidebar.announcements")}
      />
    </nav>
  );
}

export default Sidebar;
