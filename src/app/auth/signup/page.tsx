"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import SmartbizButton from "@/components/SmartbizButton";
import SmartbizInput from "@/components/SmartbizInput";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    // Validation
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Échec de l'inscription");
      }

      // redirection après inscription réussie
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
        <h1 className="text-3xl font-bold text-slate-900">Création de compte</h1>
        <p className="mt-2 text-slate-500">Créez un compte et commencez profiter des fonctionnalités de SmartBiz.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <SmartbizInput
            id="fullName"
            label="Nom complet"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Entrez votre nom complet"
          />

          <SmartbizInput
            id="email"
            label="Adresse Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
          />

          <SmartbizInput
            id="password"
            label="Votre mot de passe"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
          />

          <SmartbizInput
            id="confirmPassword"
            label="Confirmation de mot de passe"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmer le mot de passe"
          />

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <SmartbizButton
            type="submit"
            label="Créer un compte"
            loading={isLoading}
            bgColor="var(--smartbiz-bg-primary, #1A6BFF)"
            textColor="#ffffff"
            className="text-center"
          />
        </form>

        <hr className="my-6 border-t border-gray-300" />
        <p className="mt-6 text-center text-sm text-slate-600">
          Déjà un compte ?
          <Link href="/auth/login" className="ml-2 font-semibold text-blue-600 hover:text-blue-700">
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  );
}
