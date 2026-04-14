"use client";

import ExpensesTable from "@/components/ExpensesTable";
import { ExpenseRowProps } from "@/components/ExpenseRow";

// Données d'exemple
const facturesData: ExpenseRowProps[] = [
  {
    id: "#0001",
    client: "Burkinidi Media",
    amount: "300 000F",
    status: "Envoyer",
  },
  {
    id: "#0002",
    client: "Faso commerce",
    amount: "800 000F",
    status: "Payer",
  },
  {
    id: "#0003",
    client: "Faso commerce",
    amount: "800 000F",
    status: "Payer",
  },
  {
    id: "#0004",
    client: "Faso commerce",
    amount: "800 000F",
    status: "Payer",
  },
  {
    id: "#0005",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    id: "#0006",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    id: "#0007",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    id: "#0008",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    id: "#0009",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    id: "#0010",
    client: "Burkinidi Media",
    amount: "300 000F",
    status: "Brouillons",
  },
  {
    id: "#0011",
    client: "XXX-Personal",
    amount: "200 000F",
    status: "Payer",
  },
];

export default function FacturesPage() {
  return (
    <main className="max-w-7xl mx-auto mt-8">

      <div className="rounded-lg bg-white p-6 md:p-6 shadow-sm border border-gray-200">
        <ExpensesTable data={facturesData} />
      </div>
    </main>
  );
}