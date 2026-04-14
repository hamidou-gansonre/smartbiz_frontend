"use client";

import { useState, useCallback } from "react";
import { X, Plus, CalendarBlank } from "@phosphor-icons/react";
import SmartbizButton from "@/components/SmartbizButton";

interface Article {
  id: string;
  description: string;
  quantite: number;
  prixUnitaire: number;
}

interface InvoiceFormData {
  clientName: string;
  clientEmail: string;
  clientIfu: string;
  clientRccm: string;
  clientAdresse: string;
  invoiceNumber: string;
  dateEmission: string;
  dateEcheance: string;
  devise: string;
}

const TVA_RATE = 0.05;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export default function MainCard() {
  const [formData, setFormData] = useState<InvoiceFormData>({
    clientName: "",
    clientEmail: "",
    clientIfu: "",
    clientRccm: "",
    clientAdresse: "",
    invoiceNumber: "",
    dateEmission: "",
    dateEcheance: "",
    devise: "F CFA",
  });

  const [articles, setArticles] = useState<Article[]>([
    { id: generateId(), description: "", quantite: 0, prixUnitaire: 0 },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback(
    (field: keyof InvoiceFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleArticleChange = useCallback(
    (id: string, field: keyof Article, value: string | number) => {
      setArticles((prev) =>
        prev.map((article) =>
          article.id === id ? { ...article, [field]: value } : article
        )
      );
    },
    []
  );

  const addArticle = useCallback(() => {
    setArticles((prev) => [
      ...prev,
      { id: generateId(), description: "", quantite: 0, prixUnitaire: 0 },
    ]);
  }, []);

  const removeArticle = useCallback((id: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  }, []);

  const calculateTotal = useCallback(
    (article: Article): number => {
      return article.quantite * article.prixUnitaire;
    },
    []
  );

  const sousTotal = articles.reduce(
    (sum, article) => sum + calculateTotal(article),
    0
  );

  const tvaAmount = sousTotal * TVA_RATE;
  const total = sousTotal - tvaAmount;

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    console.log({ formData, articles, sousTotal, tvaAmount, total });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  }, [formData, articles, sousTotal, tvaAmount, total]);

  const handleCancel = useCallback(() => {
    console.log("Cancelled");
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Section 1 - Information du client */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Information du client
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
          {/* Left Column */}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Nom du client ou Entreprise
              </label>
              <input
                id="clientName"
                type="text"
                placeholder="Ex: burkindi media..."
                value={formData.clientName}
                onChange={(e) => handleInputChange("clientName", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="clientEmail"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Adresse Email valide
              </label>
              <input
                id="clientEmail"
                type="email"
                placeholder="Ex: email@exemple.com..."
                value={formData.clientEmail}
                onChange={(e) =>
                  handleInputChange("clientEmail", e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="clientIfu"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Numéro IFU de l&apos;entreprise
              </label>
              <input
                id="clientIfu"
                type="text"
                placeholder="Ex: 001FOUA12F"
                value={formData.clientIfu}
                onChange={(e) => handleInputChange("clientIfu", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Si c&apos;est un particulier, laisser vide
              </p>
            </div>

            <div>
              <label
                htmlFor="clientRccm"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Numéro RCCM de l&apos;entreprise
              </label>
              <input
                id="clientRccm"
                type="text"
                placeholder="Ex: BFOUA2025FL152A12"
                value={formData.clientRccm}
                onChange={(e) =>
                  handleInputChange("clientRccm", e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Si c&apos;est un particulier, laisser vide
              </p>
            </div>

            <div>
              <label
                htmlFor="clientAdresse"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Adresse du client
              </label>
              <input
                id="clientAdresse"
                type="text"
                placeholder="Ex: Rue 19.21 , Ouagadougou, BF"
                value={formData.clientAdresse}
                onChange={(e) =>
                  handleInputChange("clientAdresse", e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="invoiceNumber"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                N° de facture
              </label>
              <input
                id="invoiceNumber"
                type="text"
                placeholder="Ex: 0001"
                value={formData.invoiceNumber}
                onChange={(e) =>
                  handleInputChange("invoiceNumber", e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            <div>
              <label
                htmlFor="dateEmission"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Date d&apos;émission
              </label>
              <div className="relative">
                <input
                  id="dateEmission"
                  type="date"
                  placeholder="Ex: 15/05/2026"
                  value={formData.dateEmission}
                  onChange={(e) =>
                    handleInputChange("dateEmission", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition pr-10"
                />
                <CalendarBlank
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="dateEcheance"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Date d&apos;échéance
              </label>
              <div className="relative">
                <input
                  id="dateEcheance"
                  type="date"
                  placeholder="Ex: 12/12/2026"
                  value={formData.dateEcheance}
                  onChange={(e) =>
                    handleInputChange("dateEcheance", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition pr-10"
                />
                <CalendarBlank
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="devise"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Devise ( XOF, XAF, $ ou £ )
              </label>
              <input
                id="devise"
                type="text"
                placeholder="Ex: F CFA"
                value={formData.devise}
                onChange={(e) => handleInputChange("devise", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Articles */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Articles</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600 w-[40%]">
                  Description
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600 w-[15%]">
                  Quantité
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600 w-[20%]">
                  Prix unitaire
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600 w-[15%]">
                  Total
                </th>
                <th className="text-center py-3 px-2 text-sm font-medium text-slate-600 w-[10%]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b border-gray-100">
                  <td className="py-2 px-2">
                    <input
                      type="text"
                      placeholder="Description de l'article"
                      value={article.description}
                      onChange={(e) =>
                        handleArticleChange(article.id, "description", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={article.quantite || ""}
                      onChange={(e) =>
                        handleArticleChange(
                          article.id,
                          "quantite",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={article.prixUnitaire || ""}
                      onChange={(e) =>
                        handleArticleChange(
                          article.id,
                          "prixUnitaire",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    />
                  </td>
                  <td className="py-2 px-2">
                    <div className="rounded-xl border border-slate-100 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-700">
                      {formatCurrency(calculateTotal(article))}
                    </div>
                  </td>
                  <td className="py-2 px-2">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => removeArticle(article.id)}
                        disabled={articles.length === 1}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Supprimer l'article"
                      >
                        <X size={18} weight="bold" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Article Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={addArticle}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
          >
            <Plus size={18} weight="bold" />
            Ajouter un article
          </button>
        </div>

        {/* Summary */}
        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-xs space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Sous-total :</span>
              <span className="font-medium text-gray-900">
                {formatCurrency(sousTotal)} {formData.devise}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">TVA - 05% :</span>
              <span className="font-medium text-gray-900">
                {formatCurrency(tvaAmount)} {formData.devise}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-200">
              <span className="text-base font-semibold text-gray-900">
                TOTAL :
              </span>
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(total)} {formData.devise}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
        <SmartbizButton
          label="Annuler"
          bgColor="bg-white border border-gray-300"
          textColor="text-gray-700"
          onClick={handleCancel}
          className="w-auto px-6"
        />
        <SmartbizButton
          label="Enregistrer la facture"
          bgColor="bg-blue-600"
          textColor="text-white"
          loading={isSubmitting}
          onClick={handleSubmit}
          className="w-auto px-6"
        />
      </div>
    </div>
  );
}
