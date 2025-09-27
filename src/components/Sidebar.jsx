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
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-y-0 right-0 z-40 w-64 bg-[#008080] text-white shadow-xl border-l border-teal-700 lg:static lg:inset-0 lg:w-64"
        >
          <div className="p-4 border-b border-teal-700 flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              پنل مدیریت
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-teal-700 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </motion.button>
          </div>

          <nav className="mt-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  {item.dropdown ? (
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() => toggleDropdown(item.key)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-right hover:bg-teal-700 rounded-lg transition-colors ${
                          openDropdowns[item.key] ? "bg-teal-700" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-3 space-x-reverse">
                          {item.icon && <item.icon size={20} />}
                          <span>{item.label}</span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: openDropdowns[item.key] ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {openDropdowns[item.key] && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mr-8 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((subItem, index) => (
                              <motion.li
                                key={index}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 20, opacity: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm hover:bg-teal-700 rounded-lg transition-colors ${
                                    subItem.active
                                      ? "bg-teal-700 text-cyan-400"
                                      : "text-teal-200"
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 space-x-reverse px-4 py-3 text-right hover:bg-teal-700 rounded-lg transition-colors ${
                          item.active
                            ? "bg-teal-700 text-cyan-400"
                            : "text-teal-200"
                        }`}
                      >
                        {item.icon && <item.icon size={20} />}
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
