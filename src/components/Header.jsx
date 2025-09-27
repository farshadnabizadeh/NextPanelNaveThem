"use client";

import React, { useState } from "react";
import Menu from "./icons/Menu";
import { motion } from "framer-motion";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#ae760d] text-white p-4 shadow-lg border-b"
    >
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleSidebar}
          className="p-2 hover:bg-teal-700 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </motion.button>

        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 space-x-reverse bg-teal-700 hover:bg-teal-600 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="font-semibold">ک</span>
              </span>
              <span>کاربر</span>
            </motion.button>

            {isProfileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-teal-900 text-white rounded-lg shadow-xl z-50 border border-teal-700"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-800 rounded-lg"
                  >
                    پروفایل
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-800 rounded-lg"
                  >
                    تنظیمات
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-teal-800 rounded-lg"
                  >
                    خروج
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
