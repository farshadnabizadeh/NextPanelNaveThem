"use client";

import React from "react";
import { motion } from "framer-motion";

const Orders = () => {
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
          سفارشات
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-teal-50 rounded-xl p-6 border border-teal-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-teal-800">
              <thead>
                <tr className="border-b border-teal-200">
                  <th className="text-right p-3">شماره سفارش</th>
                  <th className="text-right p-3">مشتری</th>
                  <th className="text-right p-3">مبلغ</th>
                  <th className="text-right p-3">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((order) => (
                  <motion.tr
                    key={order}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * order }}
                    className="border-b border-teal-100 hover:bg-teal-100 transition-colors"
                  >
                    <td className="p-3">ORD-{order}001</td>
                    <td className="p-3">کاربر {order}</td>
                    <td className="p-3">۲,۰۰۰,۰۰۰ ریال</td>
                    <td className="p-3">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        تکمیل شده
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Orders;
