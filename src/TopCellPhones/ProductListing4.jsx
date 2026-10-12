import React from 'react'
import {
  ChevronRight,
  Check,
  MoreHorizontal,
} from "lucide-react";
import Img from '../assets/images/c13.svg'
import Img1 from '../assets/images/c14.svg'
import Img2 from '../assets/images/b56.svg'
import Img3 from '../assets/images/b57.svg'
import Img4 from '../assets/images/b58.svg'
// Product data
const products = [
  {
    id: 1,
    name: "SROK Smart Phone 128GB, Oled Retina",
    image: Img1,
    reviews: "(152)",
    price: "$579.00",
    oldPrice: "$859.00",
    save: "$199.00",
    shipping: "FREE SHIPPING",
    stock: "In stock",
  },
  {
    id: 2,
    name: "aPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 Inch, 512GB",
    image: Img2,
    price: "$979.00 - $1,259.00",
    badge: "NEW",
    shipping: "$2.98 SHIPPING",
    stock: "In stock",
  },
  {
    id: 3,
    name: "Samsung Galaxy X6 Ultra LTE 4G/128 GB, Black Smartphone",
    image: Img3,
    reviews: "(5)",
    price: "$659.00",
    badge: "NEW",
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    stock: "In stock",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 5, 64GB",
    image: Img4,
    reviews: "(9)",
    price: "$1,239.00",
    oldPrice: "$1,639.00",
    save: "$59.00",
    shipping: "FREE SHIPPING",
    stock: "Contact",
  },
];


// ------------------------------------
// Conditions Sidebar
// ------------------------------------
function ConditionsSidebar() {
  const conditions = [
    ["New", "21"],
    ["Like New", "2"],
    ["Open Box", "38"],
  ];

  return (
    <aside className="w-full shrink-0 lg:w-[243px]">
      <div className="rounded-b-[8px]  px-6 py-[10px]">
        <h3 className="mb-4 text-[13px] font-bold text-[#151515]">
          By Conditions
        </h3>

        <div className="space-y-2.5">
          {conditions.map(([name, count]) => (
            <label
              key={name}
              className="flex cursor-pointer items-center gap-1.5 text-[12px] text-[#333]"
            >
              <input
                type="checkbox"
                className="h-[12px] w-[12px] appearance-none rounded-[3px] border border-[#c7c7c7] bg-white checked:bg-[#18b52a]"
              />

              <span>{name}</span>

              <span className="text-[#999]">({count})</span>
            </label>
          ))}
        </div>

        <div className="mt-7 border-t border-[#dedfe4]" />
      </div>

      {/* Advertisement */}
      <PromoBanner />
    </aside>
  );
}


// ------------------------------------
// Promotional Banner
// ------------------------------------
function PromoBanner() {
  return (
    <div className="relative mt-[9px] h-[241px] overflow-hidden rounded-[11px] bg-[#282a2d]">
      {/* Decorative product images */}
      <div className="absolute -right-[25px] bottom-[-15px] flex rotate-[-8deg] gap-[-10px]">
        <div className="h-[115px] w-[83px] rotate-[8deg] rounded-[14px] bg-[#111] shadow-lg">
          <div className="m-2 h-[90px] rounded-[7px] bg-[#252525]" />
        </div>

        <div className="h-[125px] w-[90px] rotate-[3deg] rounded-[14px] bg-[#111] shadow-lg">
          <div className="m-2 h-[98px] rounded-[7px] bg-[#222]" />
        </div>
      </div>

      {/* Banner content */}
      <div className="relative z-10 px-6 pt-6">
        <h2 className="max-w-[190px] text-[20px] font-bold leading-[23px] text-white">
          OKODO hero 11+
          <br />
          5K wireless
        </h2>

        <div className="mt-7 text-[9px] uppercase text-[#aaa]">
          From:
        </div>

        <div className="mt-1 inline-block border border-[#21b7ff] px-1">
          <span className="text-[26px] font-light text-[#20c929]">
            $169
          </span>
        </div>

        <div className="mt-2 inline-block bg-[#219fe4] px-1.5 py-0.5 text-[13px] font-bold text-white">
          70.79 × 36
        </div>
      </div>
    </div>
  );
}


// ------------------------------------
// Product Card
// ------------------------------------
function ProductCard({ product }) {
  return (
    <div className="relative min-w-0 bg-gray-100 text-black">
      {/* Save Badge */}
      {product.save && (
        <div className="absolute left-0 top-0 z-20 rounded-[5px] bg-[#0db321] px-2 py-1 text-[9px] leading-[12px] text-white">
          <div>SAVE</div>
          <div className="text-[12px] font-semibold">
            {product.save}
          </div>
        </div>
      )}

      {/* New Badge */}
      {product.badge && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-[4px] bg-[#242424] px-2 py-1 text-[8px] font-medium text-white">
          {product.badge}
        </div>
      )}

      {/* Wishlist circle */}
      <button
        aria-label="Add to wishlist"
        className="absolute right-0 top-0 z-20 h-[25px] w-[25px] rounded-full "
      />

      {/* Image */}
      <div className="flex h-[185px] items-center justify-center pt-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-[125px] w-[125px] object-contain mix-blend-multiply"
        />
      </div>

      {/* Reviews */}
      {product.reviews && (
        <div className="mb-2 text-[10px] text-[#777]">
          {product.reviews}
        </div>
      )}

      {/* Product Name */}
      <h2 className="min-h-[42px] pr-3 text-[12px] font-bold leading-[14px] text-[#151515]">
        {product.name}
      </h2>

      {/* Price */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={`text-[16px] font-bold ${
            product.oldPrice ? "text-[#ff2424]" : "text-[#111]"
          }`}
        >
          {product.price}
        </span>

        {product.oldPrice && (
          <span className="text-[11px] text-[#777] line-through">
            {product.oldPrice}
          </span>
        )}
      </div>

      {/* Labels */}
      <div className="mt-4 flex min-h-[19px] flex-wrap gap-2">
        {product.shipping && (
          <span
            className={`rounded-[4px] px-2 py-[4px] text-[8px] ${
              product.shipping === "FREE SHIPPING"
                ? "bg-[#effaf0] text-[#0db321]"
                : "bg-[#f1f1f1] text-[#333]"
            }`}
          >
            {product.shipping}
          </span>
        )}

        {product.gift && (
          <span className="rounded-[4px]  px-2 py-[4px] text-[8px] text-[#ff4d3d]">
            {product.gift}
          </span>
        )}
      </div>

      {/* Stock */}
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#222]">
        {product.stock === "In stock" ? (
          <>
            <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#12bd20]">
              <Check size={8} strokeWidth={4} color="white" />
            </span>

            <span>In stock</span>
          </>
        ) : (
          <span>{product.stock}</span>
        )}
      </div>
    </div>
  );
}


// ------------------------------------
// Pagination
// ------------------------------------
function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-1">
      <button className="flex h-[29px] min-w-[32px] items-center justify-center rounded-[5px] bg-[#0db321] px-3 text-[11px] font-semibold text-white">
        1
      </button>

      <button className="flex h-[29px] min-w-[32px] items-center justify-center rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        2
      </button>

      <button className="flex h-[29px] min-w-[32px] items-center justify-center rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        3
      </button>

      <button className="flex h-[29px] min-w-[32px] items-center justify-center rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        4
      </button>

      <button className="flex h-[29px] min-w-[38px] items-center justify-center rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        <MoreHorizontal size={13} />
      </button>

      <button className="flex h-[29px] min-w-[36px] items-center justify-center rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        20
      </button>

      <button className="flex h-[29px] items-center justify-center gap-1 rounded-[5px] border border-[#ddd] bg-white px-3 text-[11px] text-[#777]">
        Next
        <ChevronRight size={12} />
      </button>
    </div>
  );
}

const ProductListing4 = () => {
  return (
   <div className=" bg-white font-sans m-4">
      <div className="mx-auto flex  flex-col gap-[36px] px-3 py-0 lg:flex-row">
        {/* LEFT SIDEBAR */}
        <ConditionsSidebar />

        {/* RIGHT PRODUCT AREA */}
        <main className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Pagination />
        </main>
      </div>
    </div>
  )
}

export default ProductListing4
