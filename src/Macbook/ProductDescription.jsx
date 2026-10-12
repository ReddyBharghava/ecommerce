import React, { useState } from "react";
import Img from '../assets/images/d5.svg'
const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    {
      id: "description",
      label: "DESCRIPTION",
    },
    {
      id: "reviews",
      label: "REVIEWS (5)",
    },
    {
      id: "information",
      label: "ADDITIONAL INFORMATION",
    },
  ];

  return (
    <section className="w-full  px-3 py-0 sm:px-4 lg:px-6">
      <div className="mx-auto  rounded-t-lg bg-white px-5 py-5 sm:px-8 sm:py-6">

        {/* ================= TABS ================= */}
        <div className="flex flex-wrap items-center gap-8 border-b border-transparent">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 text-[9px] font-medium transition-all duration-200 sm:text-[10px] ${
                activeTab === tab.id
                  ? "font-bold text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab.label}

              {/* Active underline */}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black" />
              )}
            </button>
          ))}

        </div>

        {/* ================= DESCRIPTION ================= */}
        {activeTab === "description" && (
          <div className="mt-5">

            <p className="text-[7px] leading-[1.8] text-gray-700 sm:text-[8px] md:text-[9px]">
              Built for ultra-fast performance, the thin and lightweight
              Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and
              documents pop on a crisp, clear Super AMOLED display.
              Expandable memory lets you enjoy more of your favorite content.
              And connecting and sharing between all your Samsung devices is
              easier than ever. Welcome to life with the reimagined Samsung
              Galaxy Tab S2. Watch they world come to life on your tablet's{" "}
              <strong>Super AMOLED display *</strong>. With deep contrast,
              rich colors and crisp details, you won't miss a thing
            </p>

            {/* ================= MAIN IMAGE ================= */}
            <div className="mt-4 overflow-hidden rounded-lg">

              <img
                src={Img}
                alt="Samsung Galaxy Tab"
                className="h-auto w-full object-cover"
              />

            </div>

            {/* ================= IMAGE CAPTION ================= */}
            <p className="mt-3 text-center text-[7px] italic text-gray-400 sm:text-[8px]">
              * The Galaxy Tab S2's 4 : 3 ratio display provides you with an
              ideal environment for performing office tasks.
            </p>

          </div>
        )}

        {/* ================= REVIEWS ================= */}
        {activeTab === "reviews" && (
          <div className="py-10 text-center">

            <h3 className="text-sm font-semibold text-gray-800">
              Customer Reviews
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              5 customer reviews
            </p>

          </div>
        )}

        {/* ================= ADDITIONAL INFORMATION ================= */}
        {activeTab === "information" && (
          <div className="py-8">

            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">

              <div className="rounded bg-gray-50 p-3">
                <span className="font-semibold">
                  Display
                </span>

                <p className="mt-1 text-gray-500">
                  Super AMOLED Display
                </p>
              </div>

              <div className="rounded bg-gray-50 p-3">
                <span className="font-semibold">
                  Product
                </span>

                <p className="mt-1 text-gray-500">
                  Samsung Galaxy Tab S2
                </p>
              </div>

              <div className="rounded bg-gray-50 p-3">
                <span className="font-semibold">
                  Screen Ratio
                </span>

                <p className="mt-1 text-gray-500">
                  4 : 3
                </p>
              </div>

              <div className="rounded bg-gray-50 p-3">
                <span className="font-semibold">
                  Connectivity
                </span>

                <p className="mt-1 text-gray-500">
                  Samsung Device Connectivity
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProductDescription;