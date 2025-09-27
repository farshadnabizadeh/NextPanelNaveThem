"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
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
          خانه
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-teal-600 text-lg text-center mb-8"
        >
          به پنل مدیریت خوش آمدید
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 p-6 rounded-xl border border-teal-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">
              آمار کلی
            </h3>
            <p className="text-teal-600 text-2xl font-bold">۲۴۵</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-green-500/10 to-green-600/10 p-6 rounded-xl border border-green-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">
              سفارشات جدید
            </h3>
            <p className="text-green-600 text-2xl font-bold">۴۲</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 p-6 rounded-xl border border-cyan-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">
              کاربران فعال
            </h3>
            <p className="text-cyan-600 text-2xl font-bold">۱۲۸</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
