"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import ExpenseRow, { ExpenseRowProps } from "./ExpenseRow";
import SearchBar from "./SearchBar";

type ExpensesTableProps = {
  data: ExpenseRowProps[];
};

export default function ExpensesTable({ data }: ExpensesTableProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data.filter((expense) =>
    expense.client.toLowerCase().includes(searchValue.toLowerCase()) ||
    expense.id.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4  rounded-lg p-4">
        <div className="flex-1">
          <SearchBar
            placeholder="Rechercher une facture..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center gap-4 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-700">Filtrer</span>
            <CaretDown size={18} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-700">Trier</span>
            <CaretDown size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                N° Facture
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Client
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Montant
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((expense) => (
                <ExpenseRow
                  key={expense.id}
                  {...expense}
                  onActionClick={() => {
                    console.log(`Action clicked for ${expense.id}`);
                  }}
                />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Aucune dépense trouvée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
