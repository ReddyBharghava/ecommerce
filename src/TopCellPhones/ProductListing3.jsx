import React from 'react'


import Img from '../assets/images/c9.svg'
import Img1 from '../assets/images/c10.svg'
import Img2 from '../assets/images/c11.svg'
import Img3 from '../assets/images/c12.svg'
const colors = [
  "#b52b2e",
  "#315a7e",
  "#439ab7",
  "#222222",
  "#ffffff",
  "#12bd20",
  "#6b6b6b",
  "#56469d",
];

const memories = [
  { name: "12GB", count: 4 },
  { name: "1.5GB", count: 1 },
  { name: "8GB", count: 3 },
  { name: "1GB", count: 1 },
  { name: "6GB", count: 12 },
  { name: "512MB", count: 2 },
  { name: "4GB", count: 6 },
  { name: "3GB", count: 7 },
];

const products = [
  {
    id: 1,
    name: "Lenovo Redmi Note 5, 64GB",
    price: "$69.00",
    image: Img,
    shipping: "FREE SHIPPING",
    stock: "In stock",
  },
  {
    id: 2,
    name: "LG Pro Tablet 2023 LTE + WiFi, GPS Cellular",
    price: "$179.00 - $429.00",
    image: Img1,
    badge: "NEW",
    shipping: "$2.98 SHIPPING",
    stock: "PRE-ORDER",
  },
  {
    id: 3,
    name: "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone",
    price: "$659.00",
    image: Img2,
    reviews: "(5)",
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    stock: "In stock",
  },
  {
    id: 4,
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "$579.00",
    oldPrice: "$859.00",
    image: Img3,
    reviews: "(152)",
    badge: "OUT OF STOCK",
    save: "SAVE $199.00",
    shipping: "FREE SHIPPING",
    stock: "In stock",
  },
];

function Sidebar() {
  return (
    <aside className="w-full shrink-0  px-6 py-5 lg:w-[242px]">
      {/* Color */}
      <div className="border-t  pt-4">
        <h3 className="mb-5 text-[13px] font-bold text-[#171717]">
          By Color
        </h3>

        <div className="grid w-[170px] grid-cols-5 gap-10px gap-y-3">
          {colors.map((color, index) => (
            <button
              key={index}
              className="h-6 w-6 rounded-[5px] border border-transparent"
              style={{
                backgroundColor: color,
                borderColor: color === "#ffffff" ? "#e7e7e7" : color,
              }}
              aria-label={`Color ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 border-t " />

      {/* Memory */}
      <div>
        <h3 className="mb-5 text-[13px] font-bold text-[#171717]">
          By Memory
        </h3>

        <div className="grid grid-cols-2 gap-y-3">
          {memories.map((memory, index) => (
            <label
              key={index}
              className="flex cursor-pointer items-center gap-1.5 text-[12px] text-[#222]"
            >
              <input
                type="checkbox"
                className="h-3 w-3 appearance-none rounded-[2px] border   checked:bg-black"
              />

              <span>{memory.name}</span>

              <span className="text-[#999]">({memory.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-7 border-t border-[#dedfe4]" />
    </aside>
  );
}

function ProductCard({ product }) {
  return (
    <div className="relative min-w-0 px-2 shadow:sm ">
      {/* Top badge */}
      {product.badge && (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-[#222] px-2 py-1 text-[8px] font-medium uppercase text-white">
          {product.badge}
        </div>
      )}

      {/* Save badge */}
      {product.save && (
        <div className="absolute right-0 top-0 z-10 rounded-[6px] bg-[#0caf23] px-2 py-1 text-[9px] leading-[11px] ">
          <div>SAVE</div>
          <div className="font-bold">$199.00</div>
        </div>
      )}

      {/* Wishlist circle */}
      <button
        className="absolute right-0 top-0 h-6 w-6 rounded-full "
        aria-label="Add to wishlist"
      />

      {/* Product Image */}
      <div className="flex h-[175px] items-center justify-center pt-4 bg-gray-100 text-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-[125px] w-[105px] object-contain mix-blend-multiply"
        />
      </div>

      {/* Reviews */}
      {product.reviews && (
        <div className="mb-1 text-center text-[10px] text-[#777]">
          {product.reviews}
        </div>
      )}

      {/* Product Name */}
      <h2 className="min-h-[42px] text-[12px] font-bold leading-[14px] text-[#171717]">
        {product.name}
      </h2>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span
          className={`text-[16px] font-bold ${
            product.oldPrice ? "text-[#ef3333]" : "text-[#111]"
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

      {/* Shipping */}
      <div className="mt-4 flex min-h-[20px] flex-wrap gap-2">
        {product.shipping && (
          <span
            className={`rounded-[4px] px-2 py-1 text-[8px] ${
              product.shipping === "FREE SHIPPING"
                ? "bg-[#effaf0] text-[#0caf23]"
                : "bg-[#f3f3f3] text-[#222]"
            }`}
          >
            {product.shipping}
          </span>
        )}

        {product.gift && (
          <span className="rounded-[4px]  px-2 py-1 text-[8px] text-[#ff4d3d]">
            {product.gift}
          </span>
        )}
      </div>

      {/* Stock */}
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#222]">
        {product.stock === "In stock" ? (
          <>
            <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#12bd20] text-[7px] font-bold text-white">
              ✓
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

const ProductListing3 = () => {
  return (
  <div className=" font-sans text-[#171717]">
      <div className="mx-auto flex  flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Products */}
        <main className="flex-1 px-5 py-2 lg:px-7">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductListing3
