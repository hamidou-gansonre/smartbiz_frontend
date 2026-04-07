

"use client";

import WelcomeSection from "@/components/dashboard/WelcomeSection";
import KPISection from "@/components/dashboard/KPISection";
import CTASection from "@/components/dashboard/CTASection";

export default function DashboardPage() {
  return (
    <>
      <WelcomeSection />
      <KPISection />
      <CTASection />
    </>
  );
}