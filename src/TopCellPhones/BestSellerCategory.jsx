import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import Img1 from '../assets/images/b12.svg'
import Img2 from '../assets/images/b13.svg'
import Img3 from '../assets/images/b14.svg'
import Img4 from '../assets/images/b15.svg'
import ProductListing from "./ProductListing";
import ProductListing2 from "./ProductListing2";
import ProductListing3 from "./ProductListing3";
import ProductListing4 from "./ProductListing4";
const categories = [
  "All",
  "Iphone",
  "Samsung",
  "Xiaomi",
  "Asus",
  "Oppo",
  "Gaming Smartphone",
  "Ipad",
  "Window Tablets",
  "eReader",
  "Smartphone Chargers",
  "5G Support Smartphone",
  "Smartphone Accessories",
  "Tablets Accessories",
  "Cell Phones     $200",
];

const products = [
  {
    id: 1,
    image: Img2,
    rating: "(8)",
    name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    price: "$1,729.00",
    oldPrice: "$2,119.00",
    save: "$59.00",
    shipping: "FREE SHIPPING",
    status: "Out of stock",
    available: false,
  },
  {
    id: 2,
    image: Img3,
    rating: "",
    name: "Oppo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$979.00 - $1,259.00",
    oldPrice: "",
    save: "",
    shipping: "$2.98 SHIPPING",
    status: "PRE - ORDER",
    available: true,
  },
  {
    id: 3,
    image: Img4,
    rating: "(9)",
    name: "iSmart 24V Charger",
    price: "$9.00",
    oldPrice: "$12.00",
    save: "$3.00",
    shipping: "$3.98 SHIPPING",
    status: "Contact",
    available: true,
  },
  {
    id: 4,
    image: Img1,
    rating: "(152)",
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "$569.00",
    oldPrice: "$759.00",
    save: "$199.00",
    shipping: "FREE SHIPPING",
    status: "In stock",
    available: true,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group relative min-w-0 px-2">
      
      {/* Product Image Area */}
      <div className="relative flex h-[175px] items-center justify-center">

        {/* Save Badge */}
        {product.save && (
          <div className="absolute left-1 top-0 z-10 rounded-md bg-green-600 px-3 py-2 text-center text-white">
            <p className="text-[8px] uppercase">
              Save
            </p>

            <p className="text-xs font-semibold">
              {product.save}
            </p>
          </div>
        )}

        {/* Top circle */}
        <div className="absolute right-4 top-1 h-6 w-6 rounded-full bg-[#e4e7ed]" />

        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[125px] max-w-[170px] object-contain transition duration-300 group-hover:scale-105"
        />

      </div>

      {/* Rating / item count */}
      <div className="mb-2 text-center text-[10px] text-gray-500">
        {product.rating || "\u00A0"}
      </div>

      {/* Product name */}
      <h3 className="min-h-[58px] text-[13px] font-semibold leading-[17px] text-gray-900">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-2 flex flex-wrap items-center gap-1">

        <span
          className={`text-[16px] font-bold ${
            product.oldPrice
              ? "text-red-500"
              : "text-gray-900"
          }`}
        >
          {product.price}
        </span>

        {product.oldPrice && (
          <span className="text-[11px] text-gray-500 line-through">
            {product.oldPrice}
          </span>
        )}

      </div>

      {/* Shipping */}
      <div className="mt-4">
        <span
          className={`inline-block rounded-md px-2.5 py-1 text-[8px] font-medium ${
            product.shipping === "FREE SHIPPING"
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {product.shipping}
        </span>
      </div>

      {/* Status */}
      <div className="mt-3 flex items-center gap-2 text-[10px]">

        {product.available ? (
          <FaCheckCircle className="text-green-500" />
        ) : (
          <FaTimesCircle className="text-red-500" />
        )}

        <span className="text-gray-700">
          {product.status}
        </span>

      </div>

    </div>
  );
};

const BestSellerCategory = () => {
  return (
    <section >
      <div className="w-full  p-2 sm:p-4">
      <div className="mx-auto  rounded-lg  p-5 sm:p-6 lg:p-7">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[245px_1fr]">

          {/* ================= SIDEBAR ================= */}
          <aside className="rounded-lg  p-5">

            <h2 className="mb-5 text-[15px] font-bold uppercase text-gray-900">
              Categories
            </h2>

            {/* All Categories */}
            <button className="mb-4 w-full rounded-lg  px-4 py-2.5 text-left text-[11px] font-semibold text-gray-900 shadow-sm">
              All Categories
            </button>

            {/* Main Category */}
            <h3 className="mb-4 text-[12px] font-bold text-gray-900">
              Cell Phones & Tablets
            </h3>

            {/* Category List */}
            <div className="space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`block w-full text-left text-[12px] transition hover:text-green-600 ${
                    index === 0
                      ? "pl-4 text-gray-700"
                      : "pl-4 text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </aside>

          {/* ================= PRODUCTS ================= */}
          <div className="min-w-0">

            <h2 className="mb-6 text-[16px] font-bold uppercase text-gray-900">
              Best Seller In This Category
            </h2>

            {/* Product Slider */}
            <div className="relative">

              {/* Left Arrow */}
              <button
                className="
                  absolute left-0 top-[115px] z-20
                  hidden h-16 w-8
                  -translate-x-2
                  items-center justify-center
                  rounded-md bg-[#f1f3f8]
                  text-[8px] text-gray-500
                  lg:flex
                "
              >
                <FaChevronLeft />
              </button>

              {/* Products */}
              <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">

                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

              {/* Right Arrow */}
              <button
                className="
                  absolute right-0 top-[115px] z-20
                  hidden h-16 w-8
                  translate-x-2
                  items-center justify-center
                  rounded-md bg-[#f1f3f8]
                  text-[8px] text-gray-500
                  lg:flex
                "
              >
                <FaChevronRight />
              </button>

            </div>

          </div>

        </div>

      </div>
      </div>
      <ProductListing/>
      <ProductListing2/>
      <ProductListing3/>
      <ProductListing4/>
    </section>
  );
};

export default BestSellerCategory;