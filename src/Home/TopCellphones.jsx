import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import Img from '../assets/images/b49.svg'
import Img1 from '../assets/images/b50.svg'
import Img2 from '../assets/images/b51.svg'
import Img3 from '../assets/images/b52.svg'
import Img4 from '../assets/images/b53.svg'
import Img5 from '../assets/images/b54.svg'
import Img6 from '../assets/images/b55.svg'
import Img7 from '../assets/images/b56.svg'
import Img8 from '../assets/images/b57.svg'
import Img9 from '../assets/images/b58.svg'
import Img10 from '../assets/images/b59.svg'
import Img11 from '../assets/images/b60.svg'
import Img12 from '../assets/images/b61.svg'
import Img13 from '../assets/images/b62.svg'
import Img14 from '../assets/images/b63.svg'
import Img15 from '../assets/images/b64.svg'
import Img16 from '../assets/images/b65.svg'


const categories = [
  {
    name: "iPhone (iOS)",
    items: "74 Items",
    image: Img1,
  },
  {
    name: "Android",
    items: "35 Items",
    image: Img2,
  },
  {
    name: "5G Support",
    items: "12 Items",
    image: Img3,
  },
  {
    name: "Gaming",
    items: "9 Items",
    image: Img4,
  },
  {
    name: "Xiaomi",
    items: "52 Items",
    image: Img16,
  },
  {
    name: "Accessories",
    items: "29 Items",
    image: Img5,
  },
];

const products = [
  {
    id: 1,
    name: "SROK Smart Phone 128GB, Oled Retina",
    image: Img6,
    price: "$579.00",
    oldPrice: "$859.00",
    save: "$199.00",
    badge: "SAVE",
    shipping: "FREE SHIPPING",
    stock: true,
    ratingCount: "(152)",
  },
  {
    id: 2,
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    image: Img7,
    price: "$979.00 - $1,259.00",
    badge: "NEW",
    shipping: "$2.98 SHIPPING",
    stock: true,
    ratingCount: "(5)",
  },
  {
    id: 3,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    image: Img8,
    price: "$659.00",
    shipping: "FREE SHIPPING",
    stock: true,
    ratingCount: "(5)",
    thumbnails: [
      Img11,
    Img12,
      Img13,
    ],
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 5, 64GB",
    image: Img9,
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    save: "$59.00",
    badge: "SAVE",
    shipping: "FREE SHIPPING",
    stock: false,
    ratingCount: "(9)",
  },
  {
    id: 5,
    name: "Microsute Alpha Ultra S5 Surface 128GB 2022, Silver",
    image: Img10,
    price: "$1,729.00",
    shipping: "FREE SHIPPING",
    stock: false,
    ratingCount: "(8)",
    thumbnails: [
      Img14,
    Img15
    ],
  },
];


// -----------------------------
// Category Component
// -----------------------------

const CategoryItem = ({ category }) => {
  return (
    <div className="flex items-center justify-between gap-4 ">
      <div>
        <h3 className="text-sm sm:text-[15px] font-semibold text-gray-900">
          {category.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {category.items}
        </p>
      </div>

      <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center">
        <img
          src={category.image}
          alt={category.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};


// -----------------------------
// Product Card
// -----------------------------

const ProductCard = ({ product }) => {
  return (
    <div className="relative min-w-[210px] sm:min-w-0">

      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-0 left-0 z-10 px-3 py-1 rounded-md text-[10px] font-medium ${
            product.badge === "NEW"
              ? "bg-gray-900 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {product.badge === "SAVE" ? (
            <>
              SAVE
              <br />
              {product.save}
            </>
          ) : (
            product.badge
          )}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-[190px] flex items-center justify-center pt-8">

        {/* Circle decoration */}
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gray-200" />

        <img
          src={product.image}
          alt={product.name}
          className="max-h-[155px] max-w-[170px] object-contain relative z-[1]"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      <div className="pt-4">

        {/* Review count */}
        <p className="text-xs text-gray-500 mb-2 text-center">
          {product.ratingCount}
        </p>

        {/* Product name */}
        <h3 className="font-semibold text-sm leading-[18px] text-gray-900 min-h-[40px]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-center gap-1">
          <span
            className={`font-bold text-lg ${
              product.oldPrice
                ? "text-red-500"
                : "text-gray-900"
            }`}
          >
            {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        {/* Shipping */}
        <div className="mt-3">
          <span
            className={`inline-flex px-3 py-1 rounded-md text-[9px] font-medium ${
              product.shipping === "FREE SHIPPING"
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {product.shipping}
          </span>
        </div>

        {/* Stock */}
        <div className="mt-3 flex items-center gap-2 text-xs">
          {product.stock ? (
            <>
              <FaCheckCircle className="text-green-600" />
              <span className="text-gray-700">
                In stock
              </span>
            </>
          ) : (
            <span className="text-gray-700">
              Contact
            </span>
          )}
        </div>

        {/* Thumbnails */}
        {product.thumbnails && (
          <div className="flex items-center gap-2 mt-4">
            {product.thumbnails.map((image, index) => (
              <div
                key={index}
                className="w-8 h-8 border border-gray-100 rounded flex items-center justify-center"
              >
                <img
                  src={image}
                  alt=""
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


// -----------------------------
// Main Component
// -----------------------------

const TopCellphones = () => {
  return (
    <section className= "flex  bg-[#e5e7ee]  max-w-full w-[2080px]">

      <div className="max-w-[1840px]  bg-white  p-5 sm:p-7">

        {/* =====================================
            HEADER
        ====================================== */}

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            TOP CELLPHONES & TABLETS
          </h2>

          <button className="hidden sm:block text-sm text-gray-500 hover:text-green-600 transition">
            View All
          </button>
        </div>


        {/* =====================================
            BANNER + CATEGORIES
        ====================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[530px_1fr] gap-8">

          {/* Banner */}
          <div className="relative h-[175px] sm:h-[180px] rounded-lg overflow-hidden bg-[#dfe1e8]">

            <div className="absolute left-6 sm:left-7 top-7 z-10">

              <h3 className="text-xl sm:text-2xl font-medium leading-tight text-gray-900 max-w-[180px]">
                REDMI NOTE
                <br />
                12 PRO+ 5G
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                Rise to the challenge
              </p>

              <button className="mt-4 bg-gray-900 hover:bg-green-600 text-white text-xs font-medium px-4 py-2.5 rounded-md transition">
                SHOP NOW
              </button>
            </div>

            <img
              src={Img}
              alt="Redmi Note"
              className="absolute right-0 top-0 h-full w-[65%] object-cover"
            />
          </div>


          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 content-center">

            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                category={category}
              />
            ))}

          </div>
        </div>


        {/* =====================================
            DIVIDER
        ====================================== */}

        <div className="border-t border-gray-200 mt-6 mb-5" />


        {/* =====================================
            PRODUCT SECTION
        ====================================== */}

        <div className="relative">

          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-2 top-[110px] z-20 w-9 h-16 bg-gray-50 hover:bg-gray-100 rounded-md items-center justify-center text-gray-400">
            <FaChevronLeft size={11} />
          </button>


          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>


          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-2 top-[110px] z-20 w-9 h-16 bg-gray-50 hover:bg-gray-100 rounded-md items-center justify-center text-gray-400">
            <FaChevronRight size={11} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default TopCellphones;