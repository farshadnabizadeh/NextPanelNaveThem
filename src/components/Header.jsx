"use client";

import React, { useState } from "react";
import Menu from "./icons/Menu";

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-[#0F172B] text-white p-4 shadow-2xl border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 space-x-reverse bg-slate-700/50 hover:bg-slate-600/50 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="font-semibold">ک</span>
              </span>
              <span>کاربر</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 text-white rounded-lg shadow-2xl z-50 border border-slate-700/50">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-700/50 rounded-lg"
                  >
                    پروفایل
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-700/50 rounded-lg"
                  >
                    تنظیمات
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-slate-700/50 rounded-lg"
                  >
                    خروج
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
