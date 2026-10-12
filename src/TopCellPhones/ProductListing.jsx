import React, { useState } from "react";
import {
  FaChevronDown,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Img6 from '../assets/images/b55.svg'
import Img7 from '../assets/images/b56.svg'
import Img8 from '../assets/images/b57.svg'
import Img9 from '../assets/images/b58.svg'
// import Img10 from '../assets/images/b59.svg'
// import Img11 from '../assets/images/b60.svg'
// import Img12 from '../assets/images/b61.svg'

const products = [
  {
    id: 1,
    name: "SROK Smart Phone 128GB, Oled Retina",
    image: Img6,
    price: "$579.00",
    oldPrice: "$859.00",
    save: "$199.00",
    stock: true,
    shipping: "FREE SHIPPING",
    tag: "",
  },
  {
    id: 2,
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    image: Img7,
    price: "$979.00 - $1,259.00",
    stock: true,
    shipping: "$2.98 SHIPPING",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone",
    image: Img8,
    price: "$659.00",
    stock: true,
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 5, 64GB",
    image: Img9,
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    save: "$59.00",
    stock: false,
    shipping: "FREE SHIPPING",
  },
];

const brands = [
  ["envato", "14"],
  ["code canyon", "6"],
  ["videohive", "7"],
  ["photodune", "18"],
  ["microlancer", "1"],
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative min-w-0 bg-white px-3 py-4">

      {/* Save / New Badge */}
      <div className="absolute left-3 top-2 z-10">
        {product.save && (
          <div className="rounded-md bg-green-600 px-2 py-1 text-center text-white">
            <p className="text-[9px] uppercase">Save</p>
            <p className="text-xs font-semibold">{product.save}</p>
          </div>
        )}

        {!product.save && product.tag && (
          <span className="rounded bg-gray-900 px-2 py-1 text-[9px] text-white">
            {product.tag}
          </span>
        )}
      </div>

      {/* Circle */}
      <div className="absolute right-3 top-3 h-6 w-6 rounded-full bg-slate-200" />

      {/* Product Image */}
      <div className="flex h-[170px] items-center justify-center pt-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-[130px] max-w-[160px] object-contain"
        />
      </div>

      {/* Product Count */}
      <p className="mt-2 text-center text-xs text-gray-500">
        ({product.id === 1 ? "152" : product.id === 3 ? "5" : "9"})
      </p>

      {/* Name */}
      <h3 className="mt-2 min-h-[48px] text-sm font-semibold leading-4 text-gray-900">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-2">
        <span
          className={`text-lg font-bold ${
            product.oldPrice ? "text-red-500" : "text-gray-900"
          }`}
        >
          {product.price}
        </span>

        {product.oldPrice && (
          <span className="ml-1 text-sm text-gray-500 line-through">
            {product.oldPrice}
          </span>
        )}
      </div>

      {/* Shipping */}
      {product.shipping && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
            {product.shipping}
          </span>

          {product.gift && (
            <span className="rounded-md bg-red-50 px-2 py-1 text-[9px] font-medium text-red-500">
              {product.gift}
            </span>
          )}
        </div>
      )}

      {/* Stock */}
      <div className="mt-3">
        {product.stock ? (
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <FaCheckCircle className="text-green-500" />
            <span>In stock</span>
          </div>
        ) : (
          <div className="text-center text-xs text-gray-700">
            Contact
          </div>
        )}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [minPrice, setMinPrice] = useState("45.00");
  const [size, setSize] = useState("10.9 inch");
  const [color, setColor] = useState("Red");
  const [storage, setStorage] = useState("128GB");

  return (
    <aside className="w-full shrink-0 rounded-lg  p-5 lg:w-[230px]">

      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">CATEGORIES</h2>

        <button className="text-xs text-gray-700 hover:text-green-600">
          Reset All
        </button>
      </div>

      {/* Filters */}
      <div className="mt-5 grid grid-cols-2 gap-2">
        <input
          value={`Min: $${minPrice}`}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full rounded-md border-none  px-2 py-2 text-xs outline-none"
        />

        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full rounded-md border-none  px-2 py-2 text-xs outline-none"
        />

        <input
          value={`Color: ${color}`}
          onChange={(e) => setColor(e.target.value)}
          className="w-full rounded-md border-none  px-2 py-2 text-xs outline-none"
        />

        <input
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
          className="w-full rounded-md border-none  px-2 py-2 text-xs outline-none"
        />
      </div>

      {/* Brands */}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold">By Brands</h3>

        <input
          type="text"
          className="h-8 w-full rounded-md  outline-none"
        />

        <div className="mt-4 space-y-3">
          {brands.map(([brand, count]) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2 text-xs"
            >
              <input
                type="checkbox"
                className="h-3 w-3 accent-green-500"
              />

              <span className="font-medium capitalize">
                {brand}
              </span>

              <span className="text-gray-500">
                ({count})
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

const ProductListing = () => {
  const [itemsPerPage, setItemsPerPage] = useState("24");
  const [sort, setSort] = useState("Default");

  return (
    <section className="p-3 md:p-5">

      <div className="mx-auto ">

        <div className="flex flex-col gap-5 lg:flex-row">

          {/* Sidebar */}
          <Sidebar />

          {/* Main */}
          <main className="flex-1">

            {/* Top Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-1">

              {/* Results */}
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">
                  1 - 40
                </span>{" "}
                of 120 results
              </div>

              {/* Items */}
              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-gray-500 sm:block">
                  Show item
                </span>

                <div className="flex overflow-hidden rounded-md bg-[#eef0f7]">
                  {["24", "48", "72"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setItemsPerPage(item)}
                      className={`px-3 py-2 text-xs font-semibold transition ${
                        itemsPerPage === item
                          ? "bg-[#eef0f7] text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-gray-500 sm:block">
                  Show item
                </span>

                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none rounded-md bg-[#eef0f7] py-2 pl-4 pr-9 text-xs font-medium outline-none"
                  >
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>

                  <FaChevronDown
                    className="pointer-events-none absolute right-3 top-3 text-gray-500"
                    size={9}
                  />
                </div>
              </div>

              {/* View */}
              <div className="hidden text-xs text-gray-500 md:block">
                View As
              </div>
            </div>

            {/* Products */}
            <div className="mt-5 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;