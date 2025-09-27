import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 min-h-full">
      <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">داشبورد</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 p-6 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">مجموع فروش</h3>
            <p className="text-emerald-300 text-2xl font-bold">۱۰,۰۰۰,۰۰۰ ریال</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">سفارشات جدید</h3>
            <p className="text-blue-300 text-2xl font-bold">۲۵</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">کاربران فعال</h3>
            <p className="text-purple-300 text-2xl font-bold">۱۵۰</p>
          </div>
        </div>

        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
          <h2 className="text-xl font-semibold text-white mb-4">چارت فروش</h2>
          <div className="h-64 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg flex items-center justify-center border border-slate-600/30">
            <p className="text-slate-400">نمودار فروش در اینجا نمایش داده می‌شود</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;