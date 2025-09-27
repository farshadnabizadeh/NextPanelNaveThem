import React from 'react';

const Products = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 min-h-full">
      <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">محصولات</h1>
        
        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-slate-800/40 rounded-xl p-4 border border-slate-600/30 backdrop-blur-sm">
                <div className="w-full h-32 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg mb-4"></div>
                <h3 className="text-white font-semibold mb-2">محصول {item}</h3>
                <p className="text-slate-400 text-sm">توضیحات کوتاه درباره محصول</p>
                <p className="text-emerald-400 font-bold mt-2">۱,۰۰۰,۰۰۰ ریال</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;