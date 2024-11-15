import Sidebar, {
  MobileSidebar,
  SidebarContent,
} from "@/components/navigation/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <main className="flex-1 overflow-auto p-4">{children}</main>
      <div className="absolute right-0 md:hidden">
        <MobileSidebar>
          <SidebarContent />
        </MobileSidebar>
      </div>
    </div>
  );
}
