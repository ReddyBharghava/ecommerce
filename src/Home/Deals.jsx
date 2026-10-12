import React from 'react'
import Img from '../assets/images/b5.svg'
import Img1 from '../assets/images/b6.svg'
import Img2 from '../assets/images/b7.svg'
import Img3 from '../assets/images/b8.svg'
import Img4 from '../assets/images/b9.svg'
import Img5 from '../assets/images/b10.svg'
import BestSeller from './BestSeller'
import BrandNew from './BrandNew'
import Laptops from './Laptops'
import CategoryShowcase from './CategoryShowcase'
import RecentlyViewed from './RecentlyViewed'
import AboutSection from './AboutSection'

import TopCellphones from './TopCellphones'

 const promos = [
    {
      image: Img3,
      alt: "Gaming controller sale",
    },
    {
      image: Img4,
      alt: "Tablet promotion",
    },
    {
      image: Img5,
      alt: "Smartphone promotion",
    },
  ];

const Deals = () => {

   
  return (
    <section >
        <div className="w-full p-3 md:p-5 lg:p-7">
      <div className=" max-w-[1840px]">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">

          {/* ================= LEFT SECTION ================= */}
          <div>
            {/* Green Heading */}
            <div className="flex min-h-[62px] items-center justify-between rounded-xl bg-[#16c31d] px-5 md:px-8">
              <h2 className="text-lg font-bold uppercase text-white md:text-xl">
                Deals of the Day
              </h2>

              <div className="hidden text-xs leading-4 text-white md:block">
                <p>e</p>
                <p>w</p>
                <p>A</p>
              </div>
            </div>

            {/* Product Deal Card */}
            <div className="mt-1 rounded-xl bg-white px-5 py-8 md:px-8 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[520px_1fr]">

                {/* ================= PRODUCT IMAGES ================= */}
                <div className="relative flex min-h-[440px]">

                 

                  {/* Main Phone */}
                  <div className="flex flex-1 items-center justify-center">
                    <img
                      src={Img2}
                      alt="Smartphone"
                      className=" w-full  object-contain"
                    />
                  </div>

                  {/* Small decorative circle */}
                  <div className="absolute right-4 top-[70px] h-8 w-8 rounded-full bg-[#eceff5]" />
                </div>

                {/* ================= PRODUCT INFORMATION ================= */}
                <div className="flex flex-col justify-center">
                  <p className="mb-2 text-center text-xs text-gray-500">
                    (12)
                  </p>

                  <h3 className="max-w-[500px] text-xl font-bold leading-tight text-black">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h3>

                  {/* Price */}
                  <div className="mt-5 flex flex-wrap items-center gap-1">
                    <span className="text-[26px] font-bold text-red-500">
                      $569.00
                    </span>

                    <span className="text-base text-gray-500 line-through">
                      $759.00
                    </span>
                  </div>

                  {/* Product Specifications */}
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                    <li>
                      Intel LGA 1700 Socket: Supports 13th &amp; 12th Gen Intel
                      Core
                    </li>

                    <li>
                      DDR5 Compatible: 4* SMD DIMMs with XMP 3.0 Memory
                    </li>

                    <li>
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </li>
                  </ul>

                  {/* Shipping buttons */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="rounded-lg bg-green-50 px-5 py-2 text-xs font-medium text-green-600">
                      FREE SHIPPING
                    </span>

                    <span className="rounded-lg bg-red-50 px-5 py-2 text-xs font-medium text-red-500">
                      FREE GIFT
                    </span>
                  </div>

                  {/* ================= COUNTDOWN ================= */}
                  <div className="mt-8 flex flex-col gap-5 border-b border-gray-200 pb-6 md:flex-row md:items-center">

                    <div className="w-[145px] text-sm font-semibold uppercase leading-5">
                      <p>Hurry Up!</p>
                      <p>Promotion Will</p>
                      <p>Expires In</p>
                    </div>

                    <div className="flex gap-3">

                      {/* Days */}
                      <div className="flex h-[76px] w-[60px] flex-col items-center justify-center rounded-lg bg-[#eceff5]">
                        <span className="text-xl font-bold">162</span>
                        <span className="text-xs text-gray-500">d</span>
                      </div>

                      {/* Hours */}
                      <div className="flex h-[76px] w-[60px] flex-col items-center justify-center rounded-lg bg-[#eceff5]">
                        <span className="text-xl font-bold">9</span>
                        <span className="text-xs text-gray-500">h</span>
                      </div>

                      {/* Minutes */}
                      <div className="flex h-[76px] w-[60px] flex-col items-center justify-center rounded-lg bg-[#eceff5]">
                        <span className="text-xl font-bold">2</span>
                        <span className="text-xs text-gray-500">m</span>
                      </div>

                      {/* Seconds */}
                      <div className="flex h-[76px] w-[60px] flex-col items-center justify-center rounded-lg bg-[#eceff5]">
                        <span className="text-xl font-bold">4</span>
                        <span className="text-xs text-gray-500">s</span>
                      </div>
                    </div>
                  </div>

                  {/* ================= PROGRESS ================= */}
                  <div className="mt-5">
                    <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#e4e7ed]">
                      <div className="h-full w-[40%] rounded-full bg-[#16c31d]" />
                    </div>

                    <p className="mt-3 text-sm text-gray-500">
                      Sold:{" "}
                      <span className="font-bold text-black">
                        26/75
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT PROMOTIONAL IMAGES ================= */}
          <aside className="grid grid-cols-1 gap-2 sm:grid-cols-3 xl:grid-cols-1">

            {promos.map((promo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white"
              >
                <img
                  src={promo.image}
                  alt={promo.alt}
                  className="h-[190px] w-full object-cover xl:h-[187px]"
                />
              </div>
            ))}

          </aside>
        </div>
      </div>
      </div>
      <div className="flex min-h-[103px] items-center justify-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-1 text-center text-[15px] font-normal text-white">
          
          {/* Star */}
          <span className="mr-1 text-[23px]">
            ⭐
          </span>

          {/* Normal text */}
          <span>
            Member get
          </span>

          {/* Highlighted text */}
          <span className="font-medium text-[#ffd600]">
            FREE SHIPPING*
          </span>

          {/* Normal text */}
          <span>
            with no order minimum!.
          </span>

          {/* Restriction text */}
          <span>
            *Restriction apply
          </span>

          {/* Trial text */}
          <span className="underline decoration-white/40">
            free 30-days trial!
          </span>
        </div>
      </div>
      <BestSeller/>
      <BrandNew/>
      <TopCellphones/>
      <Laptops/>
      <CategoryShowcase/>
      <RecentlyViewed/>
      <AboutSection/>
    
   
    </section>
  );
};


export default Deals
