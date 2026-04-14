"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPISection from "@/components/dashboard/KPISection";
import RecentInvoicesSection from "@/components/dashboard/RecentInvoicesSection";
import CTASection from "@/components/dashboard/CTASection";

export default function DashboardPage() {
  return (
    <>
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="px-3 md:px-6 py-4">
          <DashboardHeader
            title="Dashboard"
            subtitle="Vue global"
            buttonLabel="Ajouter une facture"
            onButtonClick={() => console.log('Add invoice')}
          />
        </div>
      </div>
      <div className="p-3 md:p-6">
        <div className="max-w-7xl mx-auto">
          <KPISection />
          <CTASection />
          <RecentInvoicesSection />
        </div>
      </div>
    </>
  );
}