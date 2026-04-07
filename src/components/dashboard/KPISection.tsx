"use client";

import KPICard from "./KPICard";

interface KPIData {
  label: string;
  value: string;
  factureCount: number;
  percentageChange: number;
}

const KPI_METRICS: KPIData[] = [
  {
    label: "Total Dues",
    value: "1 200 000 F",
    factureCount: 3,
    percentageChange: 15,
  },
  {
    label: "Payés",
    value: "500 000 F",
    factureCount: 3,
    percentageChange: 15,
  },
  {
    label: "En retard",
    value: "200 000 F",
    factureCount: 3,
    percentageChange: -8,
  },
  {
    label: "Total Dépenses",
    value: "400 000 F",
    factureCount: 3,
    percentageChange: -12,
  },
];

export default function KPISection() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_METRICS.map((metric, index) => (
          <KPICard
            key={index}
            label={metric.label}
            value={metric.value}
            factureCount={metric.factureCount}
            percentageChange={metric.percentageChange}
          />
        ))}
      </div>
    </section>
  );
}
