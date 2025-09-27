"use client";

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Home, Dashboard, Products, Orders, Settings } from "../labels";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-slate-800"
      dir="rtl"
    >
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <main className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 p-4 lg:p-6 min-h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto h-full overflow-hidden">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
