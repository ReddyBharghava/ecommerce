import React from "react";
import Img from '../assets/images/b66.svg'
import Img1 from '../assets/images/b67.svg'
import Img2 from '../assets/images/b68.svg'
import Img3 from '../assets/images/b69.svg'
const products = [
  {
    badge: "NEW",
    reviews: "(152)",
    name: "Xomie Remid 8 Sport Water Resistance Watch",
    price: "$579.00",
    image: Img,
  },
  {
    badge: "NEW",
    reviews: "",
    name: "Microte Surface 2.0 Laptop",
    price: "$979.00",
    image:  Img1
  },
  {
    badge: "",
    reviews: "",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    price: "$979.00 - $1,259.00",
    image: Img2,
    save: "$192.00",
  },
  {
    badge: "",
    reviews: "(152)",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "$579.00",
    oldPrice: "$779.00",
    image: Img3
 },
];

const RecentlyViewed = () => {
  return (
    <section className=" px-3 py-4 sm:px-5">
      <div className="mx-auto  rounded-xl bg-white px-6 py-5 shadow-sm">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[15px] font-bold uppercase text-black">
            Your Recently Viewed
          </h2>

          <button className="text-[11px] text-gray-500 hover:text-black">
            View All
          </button>

          {/* Small slider dots */}
          <div className="hidden h-6 w-14 items-center justify-center gap-2 rounded-full bg-[#eef0f5] sm:flex">
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex min-h-[105px] items-center gap-3"
            >
              {/* Product Image */}
              <div className="relative flex h-[85px] w-[90px] shrink-0 items-center justify-center">
                
                {product.badge && (
                  <span className="absolute left-0 top-0 z-10 rounded-sm bg-[#202020] px-2 py-1 text-[8px] font-medium text-white">
                    {product.badge}
                  </span>
                )}

                {product.save && (
                  <span className="absolute -right-1 -top-1 z-10 rounded-md bg-green-500 px-2 py-1 text-[7px] leading-tight text-white">
                    SAVE
                    <br />
                    {product.save}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[75px] w-[75px] object-contain"
                />
              </div>

              {/* Product Information */}
              <div className="min-w-0 flex-1">
                {product.reviews && (
                  <p className="mb-1 text-[8px] text-gray-500">
                    {product.reviews}
                  </p>
                )}

                <h3 className="line-clamp-2 text-[10px] font-semibold leading-[14px] text-black">
                  {product.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-1">
                  <span
                    className={`text-[14px] font-bold ${
                      product.oldPrice
                        ? "text-red-500"
                        : "text-black"
                    }`}
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

              {/* Circular indicator */}
              {index !== 3 && (
                <span className="absolute right-0 top-1 h-6 w-6 rounded-full bg-[#e1e4eb]"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;