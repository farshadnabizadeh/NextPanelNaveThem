"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home from "./icons/Home";
import Dashboard from "./icons/Dashboard";
import Products from "./icons/Products";
import Orders from "./icons/Orders";
import Settings from "./icons/Settings";
import Analytics from "./icons/Analytics";
import ChevronDown from "./icons/ChevronDown";
import Menu from "./icons/Menu";

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (menuKey) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const menuItems = [
    {
      key: "dashboard",
      label: "داشبورد",
      icon: Dashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      key: "products",
      label: "محصولات",
      icon: Products,
      href: "/products",
      active: pathname === "/products",
    },
    {
      key: "orders",
      label: "سفارشات",
      icon: Orders,
      href: "/orders",
      active: pathname === "/orders",
    },
    {
      key: "analytics",
      label: "تحلیل‌ها",
      icon: Analytics,
      dropdown: [
        {
          label: "گزارش فروش",
          href: "/analytics/sales",
          active: pathname === "/analytics/sales",
        },
        {
          label: "آمار کاربران",
          href: "/analytics/users",
          active: pathname === "/analytics/users",
        },
        {
          label: "رتبه‌بندی",
          href: "/analytics/ranking",
          active: pathname === "/analytics/ranking",
        },
      ],
    },
    {
      key: "settings",
      label: "تنظیمات",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ];

  if (!isOpen) return null;

  return (
    <aside className="fixed inset-y-0 right-0 z-40 w-64 bg-[#0F172B] text-white shadow-2xl border-l border-slate-700/50 lg:static lg:inset-0 lg:w-64">
      <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          پنل مدیریت
        </h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-right hover:bg-slate-700/50 rounded-lg transition-colors ${
                      openDropdowns[item.key] ? "bg-slate-700/50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      {item.icon && <item.icon size={20} />}
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        openDropdowns[item.key] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdowns[item.key] && (
                    <ul className="mr-8 mt-2 space-y-1">
                      {item.dropdown.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm hover:bg-slate-700/50 rounded-lg transition-colors ${
                              subItem.active
                                ? "bg-slate-700/50 text-blue-400"
                                : "text-slate-300"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 space-x-reverse px-4 py-3 text-right hover:bg-slate-700/50 rounded-lg transition-colors ${
                    item.active
                      ? "bg-slate-700/50 text-blue-400"
                      : "text-slate-300"
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
