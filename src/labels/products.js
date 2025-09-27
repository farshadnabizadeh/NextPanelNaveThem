"use client";

import React from "react";
import { motion } from "framer-motion";

const Products = () => {
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
          محصولات
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-teal-50 rounded-xl p-6 border border-teal-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * item }}
                className="bg-white rounded-xl p-4 border border-teal-200 shadow-sm"
              >
                <div className="w-full h-32 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg mb-4"></div>
                <h3 className="text-teal-800 font-semibold mb-2">
                  محصول {item}
                </h3>
                <p className="text-teal-600 text-sm">
                  توضیحات کوتاه درباره محصول
                </p>
                <p className="text-emerald-600 font-bold mt-2">
                  ۱,۰۰۰,۰۰۰ ریال
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;
