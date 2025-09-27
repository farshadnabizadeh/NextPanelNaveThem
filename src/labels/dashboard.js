import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">داشبورد</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">مجموع فروش</h3>
          <p className="text-2xl font-bold text-green-600">۱۰,۰۰۰,۰۰۰ ریال</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">سفارشات جدید</h3>
          <p className="text-2xl font-bold text-blue-600">۲۵</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">کاربران فعال</h3>
          <p className="text-2xl font-bold text-purple-600">۱۵۰</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
