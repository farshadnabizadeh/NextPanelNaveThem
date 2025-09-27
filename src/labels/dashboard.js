'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
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
          داشبورد
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 p-6 rounded-xl border border-emerald-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">مجموع فروش</h3>
            <p className="text-emerald-600 text-2xl font-bold">۱۰,۰۰۰,۰۰۰ ریال</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 p-6 rounded-xl border border-teal-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">سفارشات جدید</h3>
            <p className="text-teal-600 text-2xl font-bold">۲۵</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 p-6 rounded-xl border border-cyan-200 backdrop-blur-sm"
          >
            <h3 className="text-teal-800 font-semibold text-lg mb-2">کاربران فعال</h3>
            <p className="text-cyan-600 text-2xl font-bold">۱۵۰</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-teal-50 rounded-xl p-6 border border-teal-200"
        >
          <h2 className="text-xl font-semibold text-teal-800 mb-4">چارت فروش</h2>
          <div className="h-64 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center border border-teal-200">
            <p className="text-teal-600">نمودار فروش در اینجا نمایش داده می‌شود</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;