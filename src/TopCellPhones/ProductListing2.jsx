import React from 'react'
import { useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaTimesCircle,
} from "react-icons/fa";
import Img from '../assets/images/b59.svg'
import Img1 from '../assets/images/b12.svg'
import Img2 from '../assets/images/c7.svg'
import Img3 from '../assets/images/c8.svg'
const products = [
  {
    id: 1,
    name: "Microsute Alpha Ultra S5 Surface 128GB 2022, Silver",
    price: "$1,729.00",
    image: Img,
    count: "(8)",
    shipping: "FREE SHIPPING",
    status: "Contact",
  },
  {
    id: 2,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "$569.00",
    oldPrice: "$759.00",
    image: Img1,
    count: "(152)",
    shipping: "FREE SHIPPING",
    status: "In stock",
    save: "$199.00",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 11 Pro 256GB 2023, Black Smartphone",
    price: "$59.00 - $129.00",
    image: Img2,
    count: "(2)",
    shipping: "FREE SHIPPING",
    status: "In stock",
  },
  {
    id: 4,
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular",
    price: "$279.00",
    image: Img3,
    count: "(152)",
    shipping: "$2.98 SHIPPING",
    status: "In stock",
  },
];

const moreProducts = [
  {
    id: 5,
    name: "Samsung Galaxy X6 Ultra LTE 4G/128 GB, Black Smartphone",
    price: "$659.00",
    image: Img,
    count: "(5)",
    shipping: "FREE SHIPPING",
    status: "In stock",
  },
  {
    id: 6,
    name: "Xiaomi Redmi Note 5, 64GB",
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    image: Img1,
    count: "(9)",
    shipping: "FREE SHIPPING",
    status: "Contact",
    save: "$59.00",
  },
];

function ProductCard({ product }) {
  return (
    <div className="relative min-w-0  px-3 py-4">

      {/* Save / New badge */}
      <div className="absolute left-3 top-2 z-10">
        {product.save ? (
          <div className="rounded-md bg-green-600 px-2 py-1 text-center text-white">
            <p className="text-[9px] leading-3">SAVE</p>
            <p className="text-xs font-semibold">{product.save}</p>
          </div>
        ) : product.id === 3 ? (
          <span className="rounded bg-gray-900 px-2 py-1 text-[9px] text-white">
            NEW
          </span>
        ) : null}
      </div>

      {/* Circular decoration */}
      <div className="absolute right-3 top-3 h-6 w-6 rounded-full bg-slate-200" />

      {/* Product image */}
      <div className="flex h-[180px] items-center justify-center border-b border-gray-100 pt-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-[135px] w-[150px] object-contain"
        />
      </div>

      {/* Product count */}
      <p className="mt-3 text-center text-[11px] text-gray-500">
        {product.count}
      </p>

      {/* Product name */}
      <h3 className="mt-2 min-h-[42px] text-[13px] font-bold leading-[17px] text-gray-900">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-2 flex flex-wrap items-center gap-1">
        <span
          className={`text-[16px] font-bold ${
            product.oldPrice ? "text-red-500" : "text-gray-900"
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
          className={`inline-block rounded-md px-2 py-1 text-[8px] font-medium ${
            product.shipping === "FREE SHIPPING"
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {product.shipping}
        </span>
      </div>

      {/* Status */}
      <div className="mt-3 flex items-center gap-2 text-[11px]">
        {product.status === "In stock" ? (
          <>
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-700">In stock</span>
          </>
        ) : (
          <span className="text-gray-700">{product.status}</span>
        )}
      </div>
    </div>
  );
}

function FilterSidebar() {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");

  const brands = [
    ["envato", "14"],
    ["code canyon", "6"],
    ["videohive", "7"],
    ["photodune", "18"],
    ["microlancer", "1"],
  ];

  return (
    <aside className="w-full shrink-0  px-4 py-5 lg:w-[220px]">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">
          CATEGORIES
        </h2>

        <button className="text-[11px] text-gray-700">
          Reset All
        </button>
      </div>

      {/* Filters */}
      <div className="mt-5 flex gap-1">
        <div className="rounded bg-white px-2 py-1 text-[10px]">
          Min: $45.00
        </div>

        <div className="rounded bg-white px-2 py-1 text-[10px]">
          10.9 inch
        </div>
      </div>

      <div className="mt-1 flex gap-1">
        <div className="rounded bg-white px-2 py-1 text-[10px]">
          Color: Red
        </div>

        <div className="rounded  px-2 py-1 text-[10px]">
          128GB
        </div>
      </div>

      {/* Brands */}
      <section className="mt-8 border-b border-gray-300 pb-6">
        <h3 className="text-xs font-bold">By Brands</h3>

        <input
          type="text"
          className="mt-4 h-7 w-full rounded border border-gray-200  px-2 outline-none"
        />

        <div className="mt-4 space-y-3">
          {brands.map(([brand, count]) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                className="h-3 w-3 accent-green-600"
              />

              <span className="text-[10px] text-gray-700">
                {brand}
              </span>

              <span className="text-[10px] text-gray-500">
                ({count})
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Price */}
      <section className="border-b border-gray-300 py-6">
        <h3 className="text-xs font-bold">By Price</h3>

        {/* Slider */}
        <div className="relative mt-5 h-1 rounded-full bg-green-600">
          <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-green-600" />
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-600" />
        </div>

        {/* Price inputs */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-8 flex-1 items-center rounded bg-white px-2">
            <span className="text-[10px]">$</span>
            <input
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full bg-transparent px-2 text-[10px] outline-none"
            />
          </div>

          <span className="text-xs">—</span>

          <div className="flex h-8 flex-1 items-center rounded  px-2">
            <span className="text-[10px]">$</span>
            <input
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-transparent px-2 text-[10px] outline-none"
            />
          </div>

          <button className="h-8 rounded bg-green-600 px-3 text-xs font-bold  hover:bg-green-700">
            Go
          </button>
        </div>
      </section>

      {/* Rating */}
      <section className="border-b border-gray-300 py-5">
        <h3 className="text-xs font-bold">By Rating</h3>

        <div className="mt-4 space-y-3">
          {["(52)", "(24)", "(5)", "(1)"].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-8"
            >
              <input
                type="checkbox"
                className="h-3 w-3 accent-green-600"
              />

              <span className="text-[10px]">{rating}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Screen Size */}
      <section className="py-5">
        <h3 className="text-xs font-bold">
          By Screen Size
        </h3>

        <div className="mt-4 flex flex-wrap gap-1">
          {[
            '7" & Under',
            '7.1" - 8.9"',
            '9" - 10.9"',
            '11" & Greater',
          ].map((size) => (
            <button
              key={size}
              className="rounded  px-2 py-2 text-[9px] hover:bg-green-600 hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
const ProductListing2 = () => {
  const allProducts = [...products, ...moreProducts];

  return (
    <div className=" p-2">

      <div className="mx-auto flex  flex-col overflow-hidden rounded bg-white lg:flex-row">

        {/* Sidebar */}
        <FilterSidebar />

        {/* Products */}
        <main className="flex-1 p-4">

          {/* Top controls */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

            <div className="text-xs text-gray-500">
              <strong className="text-gray-900">1 - 40</strong>{" "}
              of 120 results
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <span>Show item</span>

              <button className="rounded  px-3 py-2 font-semibold text-gray-800">
                24
              </button>

              <button className="px-1">48</button>
              <button className="px-1">72</button>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <span>Show item</span>

              <button className="flex items-center gap-4 rounded  px-3 py-2 text-gray-800">
                Default
                <FaChevronDown />
              </button>
            </div>

            <div className="text-[10px] text-gray-500">
              View As
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}

export default ProductListing2
