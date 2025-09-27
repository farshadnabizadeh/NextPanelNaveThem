'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Home, Dashboard, Products, Orders, Settings } from '../labels';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 1024; // lg:1024px
      setIsMobile(isMobileView);
      setSidebarOpen(!isMobileView); // Open on desktop, closed on mobile/tablet
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen bg-white" dir="rtl">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        {/* Blur overlay for mobile/tablet when sidebar is open */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-[rgba(0,0,0,0.1)] bg-opacity-50 z-30 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 bg-white p-4 lg:p-6 min-h-screen overflow-hidden ${
            isMobile && sidebarOpen ? 'blur-sm' : ''
          }`}
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