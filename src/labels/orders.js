import React from 'react';

const Orders = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 min-h-full">
      <div className="bg-slate-700/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">سفارشات</h1>
        
        <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-right p-3">شماره سفارش</th>
                  <th className="text-right p-3">مشتری</th>
                  <th className="text-right p-3">مبلغ</th>
                  <th className="text-right p-3">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((order) => (
                  <tr key={order} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="p-3">ORD-{order}001</td>
                    <td className="p-3">کاربر {order}</td>
                    <td className="p-3">۲,۰۰۰,۰۰۰ ریال</td>
                    <td className="p-3">
                      <span className="bg-emerald-600/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                        تکمیل شده
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;