import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Green Bar */}
      <div className="bg-[#00B900] text-white flex items-center justify-between px-6 py-3 rounded-t-md">
        {/* Search Section */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-[400px]">
          <select className="text-sm text-gray-700 px-3 py-2 outline-none">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-1 px-3 py-2 text-sm text-gray-700 outline-none"
          />
          <button className="px-3 text-gray-700">
            <FaSearch size={14} />
          </button>
        </div>

        {/* Info Texts */}
        <div className="flex space-x-10 text-xs font-medium">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-100 px-6 py-3 rounded-b-md">
        <p className="text-sm text-gray-500">
          Home / pages /
        </p>
      </div>
    </div>
  );
};

export default Navbar
