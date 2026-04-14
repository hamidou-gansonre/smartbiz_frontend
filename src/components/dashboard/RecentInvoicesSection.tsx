"use client";

import SmartbizButton from "@/components/SmartbizButton";
import { CaretDownIcon } from "@phosphor-icons/react";

const INVOICES = [
  {
    number: "#0001",
    client: "Burkinidi Media",
    amount: "300 000F",
    status: "Envoyer",
  },
  {
    number: "#0002",
    client: "Faso commerce",
    amount: "800 000F",
    status: "Payer",
  },
  {
    number: "#0003",
    client: "Global Assistance",
    amount: "1 300 000F",
    status: "En retard",
  },
  {
    number: "#0004",
    client: "Burkinidi Media",
    amount: "300 000F",
    status: "Brouillons",
  },
  {
    number: "#0005",
    client: "XXX-Personnal",
    amount: "200 000F",
    status: "Payer",
  },
];

const ACTIVITIES = [
  { title: "Facture créée", subtitle: "#0001", time: "10:30" },
  { title: "Paiement reçu", subtitle: "#0001", time: "07:30" },
  { title: "Facture créée", subtitle: "#0001", time: "08:45" },
];

const statusClasses: Record<string, string> = {
  Envoyer: "bg-blue-100 text-blue-700 border-blue-200",
  Payer: "bg-emerald-100 text-emerald-700 border-emerald-200",
  "En retard": "bg-red-100 text-red-700 border-red-200",
  Brouillons: "bg-amber-100 text-amber-700 border-amber-200",
};

export default function RecentInvoicesSection() {
  return (
    <section className="mt-10">
      <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row my-6 mx-6 md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Factures récentes
              </h2>
              <p className="text-sm text-gray-500">
                Suivez les dernières factures et les activités du compte.
              </p>
            </div>
            <SmartbizButton
              label="Voir tout"
              bgColor="bg-white"
              textColor="text-slate-700"
              icon={<CaretDownIcon size={22} weight="regular" />}
              className="w-full md:w-auto px-5 py-3 border border-slate-200 shadow-sm"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-6 py-4 font-semibold">N° Facture</th>
                  <th className="px-6 py-4 font-semibold">Client</th>
                  <th className="px-6 py-4 font-semibold">Montant</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {INVOICES.map((invoice) => (
                  <tr
                    key={invoice.number}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {invoice.number}
                    </td>
                    <td className="px-6 py-5">{invoice.client}</td>
                    <td className="px-6 py-5">{invoice.amount}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[invoice.status] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <SmartbizButton
                        aria-label={`Voir la facture ${invoice.number}`}
                        icon={<CaretDownIcon size={18} weight="bold" />}
                        label=""
                        bgColor="bg-slate-50"
                        textColor="text-slate-700"
                        className="h-10 w-10 p-0 border border-slate-200 hover:bg-slate-100"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6  shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Activités récentes
              </h3>
              <p className="text-sm text-slate-500">
                Dernières actions sur les factures
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={`${activity.title}-${index}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-slate-500">{activity.subtitle}</p>
                </div>
                <span className="text-sm text-slate-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
