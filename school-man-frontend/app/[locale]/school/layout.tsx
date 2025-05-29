import React from "react";
import Sidebar from "@/components/pages/school/sidebar/Sidebar";

function SchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-[300px] border-r-2">
        <Sidebar />
      </aside>
      <main className="w-full p-2">{children}</main>
    </div>
  );
}

export default SchoolLayout;
