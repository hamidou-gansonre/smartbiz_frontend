import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="relative flex-1 flex flex-col smartbiz-bg-neutral-50 text-dark ml-[var(--sidebar-width,260px)] transition-all duration-300 ease-in-out">
        {/* Fixed header */}
        <div className="flex-shrink-0 z-10">
          <DashboardHeader title="Dashboard" subtitle="Vue global" />
        </div>
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}