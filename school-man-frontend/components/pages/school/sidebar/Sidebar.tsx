"use client";
import React from "react";
import SidebarItem from "./SidebarItem";
import { useTranslations } from "next-intl";

function Sidebar({ schoolId }: { schoolId: string }) {
  const t = useTranslations("School");
  return (
    <nav className="flex flex-col w-full">
      <SidebarItem
        routeDestination={`/school/${schoolId}`}
        label={t("sidebar.dashboard")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/students`}
        label={t("sidebar.students")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/teachers`}
        label={t("sidebar.teachers")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/records`}
        label={t("sidebar.records")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/staff`}
        label={t("sidebar.staff")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/programs`}
        label={t("sidebar.programs")}
      />
      <SidebarItem
        routeDestination={`/school/${schoolId}/announcements`}
        label={t("sidebar.announcements")}
      />
    </nav>
  );
}

export default Sidebar;
