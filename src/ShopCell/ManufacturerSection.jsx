import React, { useState } from "react";
import Img from '../assets/images/c5.svg'
import Img1 from '../assets/images/c6.svg'
const ManufacturerSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full  px-3 sm:px-5 py-0">
      <div className="mx-auto  rounded-t-xl bg-white px-5 sm:px-8 py-6">

        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          From the manufacturer
        </h2>

        {/* First Paragraph */}
        <p className="text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-gray-600">
          Dive into the blockbuster movies you can't wait to see. Switch
          between your favorite apps quickly and easily. The new and improved
          octa-core processor gives you the power and speed you need to see
          more and do more. Expand your tablet's memory from 32GB to up to an
          additional 128GB and enjoy more of your favorite music, photos,
          movies and games on the go with a microSD card. With Quick Connect,
          start a show on your Smart TV and, with the touch of a button, take
          it with you by moving it to your Galaxy Tab S2.
        </p>

        {/* Second Paragraph */}
        <p className="mt-3 text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-gray-600">
          Or send videos and photos from your tablet{" "}
          <span className="text-blue-600">screen to your TV</span> screen to
          share with everyone in the room. Work effortlessly between your
          Samsung tablet and Samsung smartphone with SideSync. Quickly drag
          and drop photos between devices. And even respond to a call from
          your smartphone right on your tablet screen.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">

          {/* Left Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={Img}
              alt="Person using smartphone"
              className="w-full h-[280px] sm:h-[330px] md:h-[330px] object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={Img1}
              alt="Smartphone display"
              className="w-full h-[280px] sm:h-[330px] md:h-[330px] object-cover"
            />
          </div>

        </div>

        {/* Product Title */}
        <h3 className="mt-5 text-base sm:text-lg font-bold text-gray-900">
          Samsung Galaxy Tab S2, 8-inch, White
        </h3>

        {/* Product Description */}
        <div className="mt-3">
          <p className="text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-gray-400">
            The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
            8-megapixel camera with Auto Focus and a 2.1-megapixel camera on
            the front. Take high-quality pictures and video or video chat
            with friends, family, and colleagues. Customize your Galaxy Tab
            S2 with the apps you use most. The Samsung Galaxy Essentials
            widget provides a collection of premium complimentary apps
            optimized for your tablet screen.
          </p>

          {/* Extra Content */}
          {showMore && (
            <p className="mt-3 text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-gray-400">
              Select and download the apps you want to instantly upgrade your
              tablet experience. Enjoy a simple and convenient way to manage
              your content, stay connected, and make the most of your Galaxy
              Tab S2.
            </p>
          )}
        </div>

        {/* Show More */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-[11px] sm:text-xs font-medium text-blue-600 hover:text-blue-800 transition"
        >
          {showMore ? "SHOW LESS" : "SHOW MORE"}
        </button>

      </div>
    </section>
  );
};

export default ManufacturerSection;