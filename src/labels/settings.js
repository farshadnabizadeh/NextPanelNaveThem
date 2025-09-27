import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 min-h-full">
      <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">تنظیمات</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <h2 className="text-xl font-semibold text-white mb-4">تنظیمات حساب</h2>
            <div className="space-y-4">
              <div>
                <label className="text-slate-300 block mb-2">نام کاربری</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800/50 border border-slate-600/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="نام کاربری جدید"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-2">ایمیل</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-800/50 border border-slate-600/30 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ایمیل جدید"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
            <h2 className="text-xl font-semibold text-white mb-4">تنظیمات امنیت</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">تغییر رمز عبور</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  تغییر
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">فعال کردن 2FA</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;