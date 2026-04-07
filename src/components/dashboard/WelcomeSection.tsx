"use client";

const WELCOME_MESSAGE = "Bienvenue dans SmartBiz. Sélectionnez une option dans la barre latérale.";

export default function WelcomeSection() {
  return (
    <section className="mt-6">
      <p className="text-gray-500">{WELCOME_MESSAGE}</p>
    </section>
  );
}
