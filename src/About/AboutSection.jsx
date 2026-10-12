import React from "react";
import Delivery from '../assets/images/delivery.svg'
import Page from "./Page";
import Leadership from "./Leadership";
const features = [
  {
    title: "100% Authentic Products",
    description:
      "We provide only genuine and certified healthcare products from trusted manufacturers.",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick and secure delivery with real-time tracking to ensure your order arrives on time.",
  },
  {
    title: "Affordable Prices",
    description:
      "Get quality healthcare products at competitive prices with regular discounts and offers.",
  },
];

const AboutSection = () => {
  return (
    <section >
      <div className=" py-12 px-4">
      <div className=" mx-auto">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left Image */}
          <div className="bg-green-600 rounded-xl overflow-hidden h-[450px]">
            <img
              src={Delivery}
              alt="Delivery Boy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-gray-200 rounded-xl flex items-center">
            <div className="px-10">

              <h2 className="text-4xl font-bold text-gray-600 leading-tight">
                We connect millions of buyers and sellers around the world,
                empowering people & creating economic opportunities for all.
              </h2>

              <p className="text-gray-600 mt-8 leading-8">
                Our online pharmacy connects customers with trusted healthcare
                providers and certified medical products. We offer secure
                shopping, fast delivery, and reliable healthcare solutions for
                everyone.
              </p>

              <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Our Story
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition relative"
            >
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-green-600"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
      </div>
      <Page/>
      <Leadership/>
    </section>
  );
};

export default AboutSection;