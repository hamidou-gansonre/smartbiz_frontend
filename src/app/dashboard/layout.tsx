"use client";

import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col smartbiz-bg-neutral-50 text-dark pl-[var(--sidebar-width,287px)] transition-all duration-300 ease-in-out">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}