'use client';
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function RappelsIALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="px-3 md:px-6 py-4">
          <DashboardHeader
            title="Rappels IA"
            subtitle="Gérez vos rappels intelligents"
          />
        </div>
      </div>
      <div className="p-3 md:p-6">
        {children}
      </div>
    </>
  );
}
