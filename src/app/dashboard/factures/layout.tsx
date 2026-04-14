'use client';
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function FacturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="px-3 md:px-6 py-4">
          <DashboardHeader
            title="Factures"
            subtitle="Gérez et suivez vos factures"
            buttonLabel="Ajouter une facture"
            onButtonClick={() => console.log('Add invoice')}
          />
        </div>
      </div>
      <div className="p-3 md:p-6">
        {children}
      </div>
    </>
  );
}