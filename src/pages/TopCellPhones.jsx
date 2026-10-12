import React from 'react'
import {
  ChevronRight,
  ShoppingBag,
  Smartphone,
  Tablet,
  Gamepad2,
  Headphones,
  Cable,
  BookOpen,
} from "lucide-react";
import Img from '../assets/images/b.svg'
import BestSellerCategory from '../TopCellPhones/BestSellerCategory';

const categories = [
  {
    name: "iPhone (iOS)",
    items: "74 Items",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
  },
  {
    name: "Android",
    items: "35 Items",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
  },
  {
    name: "5G Support",
    items: "12 Items",
    image:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=100&h=100&fit=crop",
  },
  {
    name: "Apple Tablets",
    items: "22 Items",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&h=100&fit=crop",
  },
  {
    name: "Smartphone Chargers",
    items: "33 Items",
    image:
      "https://images.unsplash.com/photo-1609592424988-7f4c8b4f6e44?w=100&h=100&fit=crop",
  },
  {
    name: "Gaming",
    items: "9 Items",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=100&h=100&fit=crop",
  },
  {
    name: "Xiaomi",
    items: "52 Items",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop",
  },
  {
    name: "Accessories",
    items: "29 Items",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop",
  },
  {
    name: "Samsung Tablets",
    items: "26 Items",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=100&h=100&fit=crop",
  },
  {
    name: "eReader",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1592496001020-d31bd830651f?w=100&h=100&fit=crop",
  },
];
const TopCellPhones = () => {
  return (
     <div >
     <div className=" px-4 py-4 sm:px-6 lg:px-4">

      {/* ================= BREADCRUMB ================= */}
      <div className="mx-auto  px-6 py-6">
        <div className="flex flex-wrap  gap-2 text-[12px]">
          <span className="font-medium text-gray-400">Home</span>

          <ChevronRight
            size={14}
            strokeWidth={3}
            className="text-gray-400"
          />

          <span className="font-medium text-gray-400">Shop</span>

          <ChevronRight
            size={14}
            strokeWidth={3}
            className="text-gray-400"
          />

          <span className="font-bold text-black">
            Top Cell Phones & Tablets
          </span>
        </div>
      </div>

      {/* ================= TOP BANNER SECTION ================= */}
      <section className="mx-auto mb-3  rounded-lg bg-white p-6">

        <h1 className="mb-6 text-[15px] font-bold uppercase text-[#111111]">
          Top Cell Phones & Tablets
        </h1>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-[2fr_1fr]">

          {/* LEFT HEADPHONE BANNER */}
          <div className="relative  overflow-hidden rounded-lg bg-[#a5a8b0]">

            {/* Background headphone image */}
            <img
              src={Img}
              alt="Noise Cancelling Headphone"
              className="absolute  top-0 h-full w-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#a5a8b0] via-[#a5a8b0]/95 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-center px-8 sm:px-12">

              <h2 className="text-4xl font-extrabold leading-7 text-white">
                Noise Cancelling
              </h2>

              <p className="text-[22px] font-light leading-7 text-white">
                Headphone
              </p>

              <p className="mt-4 max-w-[190px] text-[10px] leading-[14px] text-white/90">
                Bose Over-Ear Headphone
                <br />
                Wifi, Voice Assistant,
                <br />
                Low Latency Game Mode
              </p>

              <button className="mt-7 w-fit rounded-md bg-white px-4 py-2 text-[9px] font-semibold text-black transition hover:bg-gray-100">
                BUY NOW
              </button>
            </div>

            {/* Slider counter */}
            <div className="absolute bottom-4 right-4 flex h-6 w-[88px] items-center justify-center gap-2 rounded-full bg-white text-[11px] font-medium text-gray-600">
              <span className="text-gray-400">‹</span>
              <span>3 / 3</span>
              <span className="text-gray-400">›</span>
            </div>
          </div>

          {/* RIGHT REDMI BANNER */}
          <div className="relative h-[248px] overflow-hidden rounded-lg bg-[#d7d9f0]">

            <div className="absolute left-8 top-8 z-10">
              <h2 className="text-[20px] font-medium leading-6 text-black">
                redmi note 12
                <br />
                Pro+ 5g
              </h2>

              <p className="mt-2 text-[10px] text-gray-500">
                Rise to the challenge
              </p>
            </div>

            <button className="absolute right-8 top-8 z-20 rounded-lg bg-black px-4 py-2 text-[9px] font-medium text-white transition hover:bg-gray-800">
              SHOP NOW
            </button>

            {/* Redmi phones */}
            <div className="absolute bottom-0 left-4 right-0 flex h-[125px] items-end justify-center gap-[-10px]">

              <div className="relative h-[108px] w-[48px] rotate-[5deg] rounded-md bg-gradient-to-br from-white to-[#b9d9ef] shadow-md">
                <div className="absolute left-1 top-2 h-8 w-3 rounded-sm bg-gray-700" />
              </div>

              <div className="relative z-10 h-[120px] w-[53px] rotate-[2deg] rounded-md bg-gradient-to-br from-[#e5f4ff] to-[#2474c8] shadow-md">
                <div className="absolute left-1 top-2 h-9 w-3 rounded-sm bg-gray-700" />
              </div>

              <div className="relative z-20 h-[115px] w-[52px] rotate-[-2deg] rounded-md bg-gradient-to-br from-gray-300 to-gray-500 shadow-md">
                <div className="absolute left-1 top-2 h-10 w-3 rounded-sm bg-gray-700" />
              </div>

              <div className="relative z-10 h-[110px] w-[50px] rotate-[-5deg] rounded-md bg-gradient-to-br from-orange-300 to-orange-500 shadow-md">
                <div className="absolute left-1 top-2 h-8 w-3 rounded-sm bg-gray-700" />
              </div>

              <div className="relative h-[105px] w-[48px] rotate-[-4deg] rounded-md bg-gradient-to-br from-[#d8ecff] to-[#2489ce] shadow-md">
                <div className="absolute left-1 top-2 h-8 w-3 rounded-sm bg-gray-700" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR CATEGORIES ================= */}
      <section className="mx-auto  rounded-lg bg-white px-6 py-6">

        <h2 className="mb-7 text-[15px] font-bold uppercase text-black">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group flex min-h-[50px] cursor-pointer items-center justify-between gap-3"
            >

              {/* Text */}
              <div className="min-w-0">
                <h3 className="truncate text-[11px] font-bold text-[#111111] transition group-hover:text-blue-600">
                  {category.name}
                </h3>

                <p className="mt-1 text-[9px] text-gray-500">
                  {category.items}
                </p>
              </div>

              {/* Category image */}
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[42px] w-[42px] object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

        </div>
      </section>
      </div>
      <BestSellerCategory/>
    </div>
  )
}

export default TopCellPhones
