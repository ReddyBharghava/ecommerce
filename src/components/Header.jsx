import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeart,
  FaUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [browseOpen, setBrowseOpen] = useState(false);

  const categories = [
    {
      name: "Mobiles",
      path: "/mobiles",
    },
    {
      name: "Laptops",
      path: "/laptops",
    },
  ];

  return (
    <header className="w-full bg-white text-black transition-colors duration-300 dark:bg-[#050b16] dark:text-white">

      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#eef1f7] px-4 py-2 text-sm dark:bg-[#172235]">
              Hotline 24/7
            </span>

            <span className="font-semibold">
              (025) 3886 25 16
            </span>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-6 md:flex">
            <span>Sell on Swoo</span>
            <span>Order Tracking</span>
            <span>USD</span>
            <span>🇺🇸 Eng</span>
             <ThemeToggle />
          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN HEADER
      ====================================================== */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
            ↻
          </div>

          <div>
            <h1 className="text-xl font-bold">
              SWOO
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              TECH MART
            </p>
           
          </div>
        </Link>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            to="/"
            className="flex items-center gap-2 font-semibold transition hover:text-green-500"
          >
            Homes
            <FaChevronDown size={10} />
          </Link>


          <Link
            to="/pages"
            className="flex items-center gap-2 font-semibold transition hover:text-green-500"
          >
            Pages
            <FaChevronDown size={10} />
          </Link>


          <Link
            to="/products"
            className="flex items-center gap-2 font-semibold transition hover:text-green-500"
          >
            Products
            <FaChevronDown size={10} />
          </Link>


          <Link
            to="/contact"
            className="font-semibold transition hover:text-green-500"
          >
            Contact
          </Link>

        </nav>


        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-3">

          {/* Wishlist */}
          <button
            type="button"
            className="hidden h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#172235] md:flex"
          >
           <Link to='/wishlist'> <FaHeart /></Link>
          </button>


          {/* Profile
              IMPORTANT:
              Link directly instead of Link inside button
          */}
          <Link
            to="/profile"
            className="hidden h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#172235] md:flex"
          >
            <FaUser />
          </Link>


          {/* Login */}
          <div className="hidden md:block">
            <p className="text-xs text-gray-500">
              WELCOME
            </p>

            <Link
              to="/login"
              className="font-semibold transition hover:text-green-500"
            >
              Log in / Register
            </Link>
          </div>


          {/* Cart */}
          <Link
            to="/cart"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#172235]"
          >
            <FaShoppingCart />
          </Link>

        </div>

      </div>


      {/* =====================================================
          GREEN SEARCH BAR
      ====================================================== */}
      <div className="bg-green-500">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">


          {/* SEARCH CONTAINER

              IMPORTANT:
              Do NOT use overflow-hidden here.
              Otherwise the dropdown gets clipped.
          */}
          <div className="relative flex h-12 w-full max-w-xl rounded-xl bg-white text-black">

            {/* =================================================
                ALL CATEGORIES DROPDOWN
            ================================================== */}
            <div className="relative shrink-0">

              {/* Dropdown Button */}
              <button
                type="button"
                onClick={() => setBrowseOpen((prev) => !prev)}
                className="flex h-12 items-center gap-3 rounded-l-xl border-r border-gray-200 px-5 font-medium transition hover:bg-gray-100"
              >
                <span>All Categories</span>

                {browseOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>


              {/* =================================================
                  DROPDOWN MENU
              ================================================== */}
              {browseOpen && (
                <div className="absolute left-0 top-full z-[999] mt-2 w-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">

                  <div className="py-2">

                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={() => setBrowseOpen(false)}
                        className="block px-5 py-3 text-base text-gray-800 transition hover:bg-gray-100 hover:text-green-600"
                      >
                        {category.name}
                      </Link>
                    ))}

                  </div>

                </div>
              )}

            </div>


            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search anything..."
              className="min-w-0 flex-1 px-5 outline-none"
            />


            {/* SEARCH BUTTON */}
            <button
              type="button"
              className="flex w-14 items-center justify-center rounded-r-xl text-gray-700 transition hover:bg-gray-100"
            >
              <FaSearch />
            </button>

          </div>


          {/* =================================================
              SERVICE FEATURES
          ================================================== */}
          <div className="hidden items-center gap-10 text-sm font-semibold text-white lg:flex">

            <span>
               Free Shipping Over $199
            </span>

            <span>
              ↻ 30 Days Money Back
            </span>

            <span>
              ♢ 100% Secure Payment
            </span>

          </div>

        </div>

      </div>


     

    </header>
  );
};

export default Header;