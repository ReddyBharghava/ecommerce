import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Img from '../assets/images/b11.svg'
import Img1 from '../assets/images/b12.svg'
import Img2 from '../assets/images/b13.svg'
import Img3 from '../assets/images/b14.svg'
import Img4 from '../assets/images/b15.svg'


const products = [
  {
    id: 1,
    image: Img,
    title: "BOSO 2 Wireless On-Ear Headphones",
    reviews: 152,
    price: "$359.00",
    oldPrice: "",
    save: "",
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    status: "In Stock",
    available: true,
  },
  {
    id: 2,
    image: Img1,
    title: "OPod Pro 12.9 Inch M1 2023, 64GB + WiFi",
    reviews: 152,
    price: "$569.00",
    oldPrice: "$759.00",
    save: "$199.00",
    shipping: "FREE SHIPPING",
    gift: "",
    status: "In Stock",
    available: true,
  },
  {
    id: 3,
    image: Img2,
    title: "uLosk Mini Case 2.0 SSD 512GB",
    reviews: 8,
    price: "$1,729.00",
    oldPrice: "$2,119.00",
    save: "$59.00",
    shipping: "FREE SHIPPING",
    gift: "",
    status: "Out Of Stock",
    available: false,
  },
  {
    id: 4,
    image: Img3,
    title: "Opplo Watch Series 8 GPS + Cellular",
    reviews: 10,
    price: "$979.00 - $1,259.00",
    oldPrice: "",
    save: "",
    shipping: "$2.98 SHIPPING",
    gift: "",
    status: "PRE - ORDER",
    available: null,
  },
  {
    id: 5,
    image: Img4,
    title: "iSmart 24V Charger",
    reviews: 9,
    price: "$9.00",
    oldPrice: "$12.00",
    save: "$3.00",
    shipping: "$3.98 SHIPPING",
    gift: "",
    status: "Contact",
    available: null,
  },
];

const BestSeller = () => {
  return (
    <section className="bg-white rounded-xl p-6 shadow-sm">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-10">
          <button className="font-bold border-b-2 border-black pb-2">
            BEST SELLER
          </button>

          <button className="text-gray-500 hover:text-black">
            NEW IN
          </button>

          <button className="text-gray-500 hover:text-black">
            POPULAR
          </button>
        </div>

        <button className="text-gray-500 hover:text-green-600">
          View All
        </button>
      </div>

      {/* Products */}

      <div className="relative">

        {/* Left Arrow */}

        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-16 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white">
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}

        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-16 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white">
          <FaChevronRight />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-12">

          {products.map((item) => (
            <div key={item.id} className="relative">

              {/* Decorative Circle */}

              <div className="absolute top-0 right-5 w-7 h-7 rounded-full bg-gray-200"></div>

              {/* Save Badge */}

              {item.save && (
                <div className="absolute top-8 left-0 bg-green-600 text-white rounded-md px-3 py-1 text-xs">
                  <p>SAVE</p>
                  <p className="font-bold">{item.save}</p>
                </div>
              )}

              {/* Image */}

              <div className="h-48 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-40 object-contain"
                />
              </div>

              {/* Reviews */}

              <p className="text-center text-gray-500 text-sm mb-3">
                ({item.reviews})
              </p>

              {/* Title */}

              <h3 className="font-semibold text-[17px] leading-6 min-h-[70px]">
                {item.title}
              </h3>

              {/* Price */}

              <div className="flex gap-2 items-center mt-3">
                <span className="text-3xl font-bold text-red-500">
                  {item.price}
                </span>

                {item.oldPrice && (
                  <span className="line-through text-gray-400">
                    {item.oldPrice}
                  </span>
                )}
              </div>

              {/* Labels */}

              <div className="flex gap-2 mt-4 flex-wrap">

                <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded">
                  {item.shipping}
                </span>

                {item.gift && (
                  <span className="bg-red-50 text-red-500 text-xs px-3 py-1 rounded">
                    {item.gift}
                  </span>
                )}
              </div>

              {/* Status */}

              <div className="mt-4 flex items-center gap-2 text-sm">

                {item.available === true && (
                  <>
                    <FaCheckCircle className="text-green-600" />
                    <span>In stock</span>
                  </>
                )}

                {item.available === false && (
                  <>
                    <FaTimesCircle className="text-red-500" />
                    <span>Out of stock</span>
                  </>
                )}

                {item.available === null && (
                  <span>{item.status}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;