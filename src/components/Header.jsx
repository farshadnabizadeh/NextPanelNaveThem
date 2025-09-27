"use client";

import React, { useState, useRef, useEffect } from "react";
import Menu from "./icons/Menu";
import { motion } from "framer-motion";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#015F78] text-white p-4 shadow-lg border-b border-[#015F78]"
    >
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleSidebar}
          className="p-2 hover:bg-amber-700 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </motion.button>

        <div className="relative" ref={profileRef}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 space-x-reverse bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-lg transition-colors"
          >
            <span className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="font-semibold">ک</span>
            </span>
          </motion.button>

          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-[10px] translate-x-[100px] w-48 bg-[#015F78] text-white rounded-lg shadow-xl z-50 border border-[#015F78]"
            >
              <div className="py-0">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-amber-800 hover:rounded-t-lg"
                >
                  پروفایل
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-amber-800 border-t-[1px]"
                >
                  تنظیمات
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-amber-800 rounded-b-lg border-t-[1px]"
                >
                  خروج
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
