import { ArrowRight } from "@phosphor-icons/react";

export type ExpenseRowProps = {
  id: string;
  client: string;
  amount: string;
  status: "Envoyer" | "Payer" | "En retard" | "Brouillons";
  onActionClick?: () => void;
};

const statusStyles = {
  Envoyer: "border border-blue-300 text-blue-600",
  Payer: "border border-green-300 text-green-600",
  "En retard": "border border-red-300 text-red-600",
  Brouillons: "border border-yellow-300 text-yellow-600",
};

const statusBgStyles = {
  Envoyer: "bg-blue-50",
  Payer: "bg-green-50",
  "En retard": "bg-red-50",
  Brouillons: "bg-yellow-50",
};

export default function ExpenseRow({
  id,
  client,
  amount,
  status,
  onActionClick,
}: ExpenseRowProps) {
  return (
    <tr className="border-b border-neutral-200 hover:bg-gray-50">
      <td className="px-6 py-4 text-sm font-medium text-gray-900">{id}</td>
      <td className="px-6 py-4 text-sm text-gray-700">{client}</td>
      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
        {amount}
      </td>
      <td className="px-6 py-4 text-center">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusBgStyles[status]} ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={onActionClick}
          className="inline-flex items-center justify-center rounded-lg bg-gray-200 p-2 hover:bg-gray-300 transition-colors"
        >
          <ArrowRight size={18} className="text-gray-600" />
        </button>
      </td>
    </tr>
  );
}
