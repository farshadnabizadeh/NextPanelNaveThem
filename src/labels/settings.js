"use client";

import React from "react";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <div className="p-6 bg-white min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-teal-100"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-teal-800 mb-6 text-center"
        >
          تنظیمات
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl p-6 border border-teal-200 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-teal-800 mb-4">
              تنظیمات حساب
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-teal-600 block mb-2">نام کاربری</label>
                <input
                  type="text"
                  className="w-full bg-teal-50 border border-teal-200 rounded-lg p-3 text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="نام کاربری جدید"
                />
              </div>
              <div>
                <label className="text-teal-600 block mb-2">ایمیل</label>
                <input
                  type="email"
                  className="w-full bg-teal-50 border border-teal-200 rounded-lg p-3 text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="ایمیل جدید"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl p-6 border border-teal-200 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-teal-800 mb-4">
              تنظیمات امنیت
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-teal-600">تغییر رمز عبور</span>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
                  تغییر
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-teal-600">فعال کردن 2FA</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-teal-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-teal-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Settings;
