import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
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
import ProductDescription from "./ProductDescription";
import ManufacturerSection from "./ManufacturerSection";

const products = [
  {
    id: 1,
    name: "SROK Smart Phone 128GB, Oled Retina",
    reviews: 152,
    image: Img6,
    badge: "SAVE",
    discount: "$199.00",
    price: "$579.00",
    oldPrice: "$859.00",
    shipping: "FREE SHIPPING",
    inStock: true,
  },
  {
    id: 2,
    name: "aPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 Inch, 512GB",
    reviews: 5,
    image: Img7,
    badge: "NEW",
    price: "$979.00 - $1,259.00",
    shipping: "$2.98 SHIPPING",
    inStock: true,
  },
  {
    id: 3,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + WiFi, GPS",
    reviews: 5,
    image: Img8,
    price: "$659.00",
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    inStock: true,
    thumbnails: [
      Img11,
      Img12,
      Img13,
    ],
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 5, 64GB",
    reviews: 9,
    image: Img9,
    badge: "SAVE",
    discount: "$59.00",
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    shipping: "FREE SHIPPING",
    inStock: true,
  },
  {
    id: 5,
    name: "Microsoft Alpha Ultra S5 Surface 128GB 2022, Silver",
    reviews: 8,
    image: Img10,
    price: "$1,729.00",
    shipping: "FREE SHIPPING",
    inStock: true,
    thumbnails: [
      Img14,
      Img15
    ],
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="relative min-w-0 px-3">
      {/* Product Image Section */}
      <div className="relative h-[175px] flex items-center justify-center">

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute left-0 top-0 z-10 rounded-md px-3 py-1 text-[10px] font-semibold text-white ${
              product.badge === "NEW"
                ? "bg-gray-900"
                : "bg-green-600"
            }`}
          >
            {product.badge === "SAVE" ? (
              <>
                <div className="text-[9px]">SAVE</div>
                <div>{product.discount}</div>
              </>
            ) : (
              product.badge
            )}
          </div>
        )}

        {/* Decorative circle */}
        <div className="absolute right-0 top-1 h-6 w-6 rounded-full bg-slate-200" />

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[145px] max-w-[170px] object-contain"
        />
      </div>

      {/* Separator */}
      <div className="border-t border-gray-100" />

      {/* Reviews */}
      <div className="mt-3 text-center text-xs text-gray-500">
        ({product.reviews})
      </div>

      {/* Product Name */}
      <h3 className="mt-2 min-h-[42px] text-sm font-semibold leading-4 text-gray-900">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-3 flex flex-wrap items-center gap-1">
        <span
          className={`text-lg font-bold ${
            product.oldPrice ? "text-red-500" : "text-gray-900"
          }`}
        >
          {product.price}
        </span>

        {product.oldPrice && (
          <span className="text-xs text-gray-500 line-through">
            {product.oldPrice}
          </span>
        )}
      </div>

      {/* Shipping */}
      <div className="mt-4 flex flex-wrap gap-2">
        {product.shipping && (
          <span className="rounded-md bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
            {product.shipping}
          </span>
        )}

        {product.gift && (
          <span className="rounded-md bg-red-50 px-2 py-1 text-[9px] font-medium text-red-500">
            {product.gift}
          </span>
        )}
      </div>

      {/* Stock */}
      <div className="mt-3 flex items-center gap-1 text-xs text-gray-700">
        <FaCheckCircle className="text-green-500" size={11} />
        <span>{product.inStock ? "In stock" : "Out of stock"}</span>
      </div>

      {/* Thumbnails */}
      {product.thumbnails && (
        <div className="mt-4 flex items-center gap-2">
          {product.thumbnails.map((thumb, index) => (
            <div
              key={index}
              className="flex h-7 w-7 items-center justify-center rounded border border-gray-100"
            >
              <img
                src={thumb}
                alt=""
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RelatedProducts = () => {
  return (
    <section >
      <div className="w-full  px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto  rounded-lg bg-white px-5 py-6 sm:px-8">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold uppercase text-gray-900">
            Related Products
          </h2>
        </div>

        {/* Products */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            type="button"
            className="absolute left-0 top-[85px] z-20 hidden h-12 w-8 -translate-x-5 items-center justify-center rounded-md bg-gray-50 text-gray-400 shadow-sm transition hover:bg-green-500 hover:text-white md:flex"
          >
            <FaChevronLeft size={10} />
          </button>

          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="absolute right-0 top-[85px] z-20 hidden h-12 w-8 translate-x-5 items-center justify-center rounded-md bg-gray-50 text-gray-400 shadow-sm transition hover:bg-green-500 hover:text-white md:flex"
          >
            <FaChevronRight size={10} />
          </button>

        </div>
      </div>
      </div>
    <ProductDescription/>
    <ManufacturerSection/>
    </section>
  );
};

export default RelatedProducts;