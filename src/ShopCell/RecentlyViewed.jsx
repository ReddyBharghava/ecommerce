import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80",
    rating: "(152)",
    name: "Xiaomi Redmi 8 Sport Water Resistance Watch",
    price: "$579.00",
  },
  {
    id: 2,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80",
    rating: "(152)",
    name: "Microte Surface 2.0 Laptop",
    price: "$979.00",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80",
    rating: "",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    price: "$979.00 - $1,259.00",
  },
  {
    id: 4,
    badge: "SAVE",
    save: "$192.00",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    rating: "(152)",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "$579.00",
    oldPrice: "$779.00",
  },
];

const RecentlyViewed = () => {
  return (
    <section className="w-full px-3 py-2 sm:px-5 sm:py-4">
      <div className="mx-auto  rounded-lg bg-white px-5 py-5 sm:px-7">

        {/* ================= HEADER ================= */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h2 className="text-base font-bold uppercase text-gray-900 sm:text-lg">
              Your Recently Viewed
            </h2>

            <button className="text-xs text-gray-500 transition hover:text-green-600">
              View All
            </button>
          </div>

          {/* Small slider indicator */}
          <div className="hidden h-4 w-11 items-center justify-between rounded-full bg-gray-100 px-2 sm:flex">
            <span className="text-[7px] text-gray-400">‹</span>
            <span className="text-[7px] text-gray-400">›</span>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="relative">

          {/* Left Arrow */}
          <button
            className="
              absolute
              -left-4
              top-1/2
              z-20
              hidden
              h-12
              w-7
              -translate-y-1/2
              items-center
              justify-center
              rounded-md
              bg-gray-50
              text-gray-400
              shadow-sm
              hover:bg-gray-100
              md:flex
            "
          >
            <FaChevronLeft size={9} />
          </button>

          {/* Product Row */}
          <div
            className="
              flex
              gap-7
              overflow-x-auto
              pb-2
              scrollbar-hide
              md:grid
              md:grid-cols-4
              md:gap-6
              md:overflow-visible
            "
          >
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
              absolute
              -right-4
              top-1/2
              z-20
              hidden
              h-12
              w-7
              -translate-y-1/2
              items-center
              justify-center
              rounded-md
              bg-gray-50
              text-gray-400
              shadow-sm
              hover:bg-gray-100
              md:flex
            "
          >
            <FaChevronRight size={9} />
          </button>

        </div>
      </div>
    </section>
  );
};


// ======================================================
// PRODUCT CARD
// ======================================================

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        relative
        flex
        min-w-[230px]
        items-center
        gap-3
        md:min-w-0
      "
    >

      {/* ================= IMAGE ================= */}

      <div className="relative flex h-[75px] w-[70px] shrink-0 items-center justify-center">

        {/* Badge */}
        {product.badge && (
          <div
            className={`
              absolute
              -left-1
              top-0
              z-10
              rounded-[4px]
              px-2
              py-1
              text-[8px]
              font-medium
              text-white
              ${
                product.badge === "NEW"
                  ? "bg-[#202020]"
                  : "bg-green-600"
              }
            `}
          >
            {product.badge === "SAVE" ? (
              <div className="text-center leading-3">
                <div>SAVE</div>
                <div>{product.save}</div>
              </div>
            ) : (
              "NEW"
            )}
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="
            max-h-[65px]
            max-w-[65px]
            object-contain
          "
        />
      </div>


      {/* ================= DETAILS ================= */}

      <div className="min-w-0 flex-1">

        {/* Rating */}
        {product.rating && (
          <p className="mb-1 text-[8px] text-gray-500">
            {product.rating}
          </p>
        )}

        {/* Product Name */}
        <h3
          className="
            line-clamp-2
            text-[11px]
            font-semibold
            leading-[14px]
            text-gray-900
          "
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="mt-2 flex flex-wrap items-center gap-1">
          <span
            className={`
              text-sm
              font-bold
              ${
                product.oldPrice
                  ? "text-red-500"
                  : "text-gray-900"
              }
            `}
          >
            {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-[10px] text-gray-500 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default RecentlyViewed;