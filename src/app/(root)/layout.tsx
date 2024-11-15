"use client";

import Sidebar, {
  MobileSidebar,
  SidebarContent,
} from "@/components/navigation/sidebar";
import Maintainance from "@/components/ui/maintainance";
import { isUnderMaintainance } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<{
    maintenance_mode: boolean;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await isUnderMaintainance();
        setMode(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  });
  return (
    <div className="flex h-screen">
      {mode?.maintenance_mode ? (
        <Maintainance />
      ) : (
        <>
          <Sidebar>
            <SidebarContent />
          </Sidebar>
          <main className="flex-1 overflow-auto p-4">{children}</main>
          <div className="absolute right-0 md:hidden">
            <MobileSidebar>
              <SidebarContent />
            </MobileSidebar>
          </div>
        </>
      )}
    </div>
  );
}
