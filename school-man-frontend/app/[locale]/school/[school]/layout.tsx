import React, { ReactNode } from "react";
import Sidebar from "@/components/pages/school/sidebar/Sidebar";
type Props = {
  children: ReactNode;
  params: { locale: string; school: string };
};
async function SchoolLayout({ children, params }: Props) {
  const par = await params;

  return (
    <div className="flex">
      <aside className="w-[300px] border-r-2">
        <Sidebar schoolId={par.school} />
      </aside>
      <main className="w-full p-2">{children}</main>
    </div>
  );
}

export default SchoolLayout;
