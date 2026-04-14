"use client";

import SmartbizButton from "@/components/SmartbizButton";
import { LightbulbIcon } from "@phosphor-icons/react";

export default function CTASection() {
  return (
    <section className="mt-10 rounded-lg smartbiz-bg-primary p-8 text-white ">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
            <SmartbizButton
            label="Débloquez des fonctionnalités avancées"
            icon={<LightbulbIcon size={22} weight="regular" />}
            bgColor="bg-blue-400"
            textColor="text-white"
            className="w-full md:w-[420px] lg:w-[420px] px-6 py-4 text-base font-light"
          />
          <h2 className="text-2xl font-bold mt-3 ">
            Obtenez toutes les fonctionnalités, maintenant et sans limites.
          </h2>
        </div>

        <div className="w-full max-w-xs">
          <SmartbizButton
            label="Mettre à niveau"
            bgColor="bg-white"
            textColor="text-blue-700"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
