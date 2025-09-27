import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 min-h-full">
      <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">خانه</h1>
        <p className="text-slate-300 text-lg text-center mb-8">
          به پنل مدیریت خوش آمدید
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">آمار کلی</h3>
            <p className="text-blue-300 text-2xl font-bold">۲۴۵</p>
          </div>
          <div className="bg-gradient-to-r from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">
              سفارشات جدید
            </h3>
            <p className="text-green-300 text-2xl font-bold">۴۲</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-white font-semibold text-lg mb-2">
              کاربران فعال
            </h3>
            <p className="text-purple-300 text-2xl font-bold">۱۲۸</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
