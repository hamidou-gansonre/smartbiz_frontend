"use client";

interface KPICardProps {
  label: string;
  value: string;
  factureCount: number;
  percentageChange: number;
}

export default function KPICard({
  label,
  value,
  factureCount,
  percentageChange,
}: KPICardProps) {
  const isPositive = percentageChange >= 0;
  const percentageColor = isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50";
  const percentageSign = isPositive ? "+" : "";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{label}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-4">{value}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {factureCount} facture{factureCount > 1 ? "s" : ""}
        </span>
        <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${percentageColor}`}>
          {percentageSign}
          {percentageChange}%
        </span>
      </div>
    </div>
  );
}
