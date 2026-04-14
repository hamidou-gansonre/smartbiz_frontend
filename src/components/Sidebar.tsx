"use client";

import React, { useState } from "react";import { usePathname } from "next/navigation";import Image from "next/image";
import { House, FileText, Wallet,Bell, Gear  } from "@phosphor-icons/react";

const navItems = [
  { label: "Tableau de bord", icon: <House />, href: "/dashboard" },
  { label: "Factures", icon: <FileText />, href: "/dashboard/factures" },
  { label: "Dépenses", icon: <Wallet />, href: "/dashboard/depenses" },
  { label: "Rappels IA", icon: <Bell />, href: "/dashboard/rappels-ia" },
  { label: "Paramètres", icon: <Gear />, href: "/dashboard/parametres" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty('--sidebar-width', collapsed ? '72px' : '287px');
    }
  }, [collapsed]);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <div className="flex justify-end"> 
        <button
            type="button"
            className="sidebar__brand-toggle mb-4 "
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Ouvrir le menu" : "Réduire le menu"}
          >
            {collapsed ? "›" : "‹"}
          </button>

        </div>
        <div className="sidebar__brand">
          <div className="sidebar__brand-left">
            {collapsed ? (
              <Image
                src="/logo-smartBiz-icon.png"
                alt="SmartBiz Logo Icon"
                className="sidebar__brand-icon"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src="/logo-smartBiz.png"
                alt="SmartBiz Logo"
                className="sidebar__brand-logo"
                width={210}
                height={70}
              />
            )}
          </div>
          
        </div>

        <nav className="sidebar__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`sidebar__item ${pathname === item.href ? "sidebar__item--active" : ""}`}
            >
              <span className="sidebar__item-icon" aria-hidden="true">
                {item.icon}
              </span>
              {!collapsed && (
                <span className="sidebar__item-label">{item.label}</span>
              )}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar__footer">
        <span className="sidebar__avatar">AB</span>
        {!collapsed && (
          <div className="sidebar__user-info">
            <span className="sidebar__user-name">Mon compte</span>
            <span className="sidebar__user-email">exemple@email.com</span>
          </div>
        )}
      </div>
    </aside>
  );
}
