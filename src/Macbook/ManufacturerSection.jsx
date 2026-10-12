import React from "react";
import Img from '../assets/images/d6.svg'
import Img1 from '../assets/images/d7.svg'
const ManufacturerSection = () => {
  return (
    <section className="w-full  py-2 sm:py-4  p-0">
      <div className="mx-auto  rounded-lg bg-white px-5 py-6 sm:px-8 sm:py-8">

        {/* ================= TABS ================= */}
        <div className="mb-8 flex flex-wrap items-center gap-8 border-b border-gray-200 pb-4">
          <button className="text-sm font-bold text-black">
            DESCRIPTION
          </button>

          <button className="text-sm text-gray-500 hover:text-black">
            REVIEWS (5)
          </button>

          <button className="text-sm text-gray-500 hover:text-black">
            ADDITIONAL INFORMATION
          </button>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="space-y-4 text-[13px] leading-6 text-gray-600">

          <p>
            Built for ultra-fast performance, the thin and lightweight
            Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and
            documents pop on a crisp, clear Super AMOLED display.
            Expandable memory lets you enjoy more of your favorite content.
            And connecting and sharing between all your Samsung devices is
            easier than ever. Welcome to life with the reimagined Samsung
            Galaxy Tab S2.
          </p>

          <p>
            Watch they world come to life on your tablet's{" "}
            <span className="font-bold text-black">
              Super AMOLED display
            </span>
            . With deep contrast, rich colors and crisp details, you won't
            miss a thing.
          </p>

        </div>

        {/* ================= IMAGES ================= */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Image 1 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={Img}
              alt="Samsung Galaxy tablet"
              className="h-[280px] w-full object-cover transition duration-300 hover:scale-105 sm:h-[360px]"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={Img1}
              alt="Samsung Galaxy tablet"
              className="h-[280px] w-full object-cover transition duration-300 hover:scale-105 sm:h-[360px]"
            />
          </div>

        </div>

        {/* ================= TITLE ================= */}
        <div className="mt-6">

          <h2 className="text-base font-bold text-black sm:text-lg">
            Samsung Galaxy Tab S2, 8-Inch, White
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-gray-400">
            The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
            8-megapixel camera with Auto Focus and a 2.1-megapixel camera
            on the front. Take high-quality pictures and video or video
            chat with friends, family, and colleagues. Customize your
            Galaxy Tab S2 with the apps you use most. The Samsung Galaxy
            Essentials widget provides a collection of premium
            complimentary apps optimized for your tablet screen.
          </p>

          <p className="mt-1 text-[13px] leading-6 text-gray-400">
            Select and download the apps you want to instantly upgrade
            your tablet experience.
          </p>

        </div>

        {/* ================= SHOW MORE ================= */}
        <button className="mt-4 text-xs font-medium text-blue-500 hover:text-blue-700">
          SHOW MORE
        </button>

        {/* Bottom dotted line */}
        <div className="mt-3 border-b border-dashed border-gray-300"></div>

      </div>
    </section>
  );
};

export default ManufacturerSection;

