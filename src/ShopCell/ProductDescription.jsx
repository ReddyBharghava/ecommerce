import React, { useState } from "react";
import Img from '../assets/images/c4.svg'
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
    <section className="w-full px-3 sm:px-5 m-4 ">
      <div className="mx-auto  rounded-t-xl bg-white px-5 sm:px-8 py-6">

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-8 sm:gap-10 border-b border-transparent">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 text-sm sm:text-base transition-all duration-200 ${
                activeTab === tab.id
                  ? "font-bold text-black"
                  : "font-normal text-gray-500 hover:text-black"
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

        {/* Description */}
        {activeTab === "description" && (
          <div className="pt-8">

            {/* Description Text */}
            <p className="text-[12px] sm:text-[13px] leading-6 text-gray-700">
              Built for ultra-fast performance, the thin and lightweight
              Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and
              documents pop on a crisp, clear Super AMOLED display.
              Expandable memory lets you enjoy more of your favorite content.
              And connecting and sharing between all your Samsung devices is
              easier than ever. Welcome to life with the reimagined Samsung
              Galaxy Tab S2. Watch the world come to life on your tablet's{" "}
              <strong>Super AMOLED display*</strong>. With deep contrast, rich
              colors and crisp details, you won't miss a thing.
            </p>

            {/* Main Image */}
            <div className="mt-5 overflow-hidden rounded-xl">
              <img
                src={Img}
                alt="Samsung Galaxy Tab"
                className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[295px] w-full object-cover"
              />
            </div>

            {/* Image Caption */}
            <p className="mt-3 text-center text-[10px] sm:text-[11px] italic text-gray-500">
              * The Galaxy Tab S2's 4 : 3 ratio display provides you with an
              ideal environment for performing office tasks.
            </p>
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div className="pt-8">

            <h3 className="text-lg font-semibold text-gray-900">
              Customer Reviews
            </h3>

            <div className="mt-5 space-y-5">

              {[1, 2, 3, 4, 5].map((review) => (
                <div
                  key={review}
                  className="border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">
                      Customer {review}
                    </h4>

                    <span className="text-yellow-400">
                      ★★★★★
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    Excellent product with great performance and display
                    quality.
                  </p>
                </div>
              ))}

            </div>
          </div>
        )}

        {/* Additional Information */}
        {activeTab === "information" && (
          <div className="pt-8">

            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Additional Information
            </h3>

            <div className="overflow-hidden rounded-lg border border-gray-200">

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 px-4 py-3 text-sm font-medium">
                  Brand
                </div>
                <div className="px-4 py-3 text-sm text-gray-600">
                  Samsung
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 px-4 py-3 text-sm font-medium">
                  Display
                </div>
                <div className="px-4 py-3 text-sm text-gray-600">
                  Super AMOLED
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="bg-gray-50 px-4 py-3 text-sm font-medium">
                  Screen Ratio
                </div>
                <div className="px-4 py-3 text-sm text-gray-600">
                  4 : 3
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="bg-gray-50 px-4 py-3 text-sm font-medium">
                  Product Type
                </div>
                <div className="px-4 py-3 text-sm text-gray-600">
                  Tablet
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductDescription;