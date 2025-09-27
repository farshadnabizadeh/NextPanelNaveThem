"use client";

import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Home, Dashboard, Products, Orders, Settings } from "../labels";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-white p-4 lg:p-6 min-h-screen overflow-hidden"
        >
          <div className="max-w-7xl mx-auto h-full overflow-hidden">
            {children}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
