"use client";

import { PlusCircle, Bell } from "@phosphor-icons/react";
import SmartbizButton from "@/components/SmartbizButton";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  const handleAddInvoice = () => {
    // TODO: Implement invoice creation navigation
    console.log("Add invoice clicked");
  };

  const handleNotifications = () => {
    // TODO: Implement notifications handler
    console.log("Notifications clicked");
  };

  return (
    <header className="w-full h-20 flex items-center justify-between bg-white border-b border-gray-200 px-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 leading-none mb-1">
          {title}
        </h1>
        <span className="text-sm text-gray-500 font-medium">{subtitle}</span>
      </div>
      <div className="flex items-center gap-5">
        <SmartbizButton
          label="Ajouter une facture"
          icon={<PlusCircle size={22} weight="regular" />}
          className="w-auto px-5"
          onClick={handleAddInvoice}
        />
        <button
          onClick={handleNotifications}
          aria-label="Notifications"
          className="flex items-center justify-center text-gray-500 hover:text-gray-900 transition duration-200 p-2 rounded-lg hover:bg-gray-100"
        >
          <Bell size={28} weight="bold" />
        </button>
      </div>
    </header>
  );
}
