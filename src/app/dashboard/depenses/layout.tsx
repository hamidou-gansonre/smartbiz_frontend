'use client';
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DepensesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="px-3 md:px-6 py-4">
          <DashboardHeader
            title="Dépenses"
            subtitle="Gérez et suivez tous vos dépenses"
            buttonLabel="Ajouter une dépense"
            onButtonClick={() => console.log('Add expense')}
          />
        </div>
      </div>
      <div className="p-3 md:p-6">
        {children}
      </div>
    </>
  );
}
