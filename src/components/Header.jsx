'use client';

import React, { useState } from 'react';
import Menu from './icons/Menu';

const Header = ({ onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-[#525252] text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 space-x-reverse bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="font-semibold">ک</span>
              </span>
              <span>کاربر</span>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">پروفایل</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">تنظیمات</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">خروج</a>
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