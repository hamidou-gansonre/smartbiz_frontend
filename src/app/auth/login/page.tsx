"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import SmartbizButton from "@/components/SmartbizButton";
import SmartbizInput from "@/components/SmartbizInput";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Échec de la connexion");
      }

      // redirection après connexion réussie
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <h1 className="text-3xl font-bold text-slate-900">Connectez-vous à votre compte</h1>
        <p className="mt-2 text-slate-500">Connectez-vous et profitez pleinement des fonctionnalités de SmartBiz.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <SmartbizInput
            id="email"
            label="Adresse Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
          />

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Votre mot de passe
              </label>
              <Link href="/auth/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Mot de passe oublié ?
              </Link>
            </div>
            <SmartbizInput
              id="password"
              label=""
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="mt-2"
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <SmartbizButton
            type="submit"
            label="Se connecter"
            loading={isLoading}
            bgColor="var(--smartbiz-primary-btn, #1A6BFF)"
            textColor="#ffffff"
            className="text-center"
          />
        </form>

        <hr className="my-6 border-t border-gray-300" />
        <p className="mt-6 text-center text-sm text-slate-600">
          Pas encore de compte ?
          <Link href="/auth/signup" className="ml-2 font-semibold text-blue-600 hover:text-blue-700">
            Créer un compte
          </Link>
        </p>
      </div>
    </main>
  );
}
