import React from "react";
import Img from '../assets/images/b16.svg'
import Img1 from '../assets/images/b17.svg'
import Img2 from '../assets/images/b18.svg'
import Img3 from '../assets/images/b19.svg'
const products = [
  {
    id: 1,
    image: Img,
    title: "Zumac Steel Computer Case",
    description: "An option to upgrade every three years",
    button: "SHOP NOW",
  },
  {
    id: 2,
    image: Img1,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
    button: "SHOP NOW",
  },
  {
    id: 3,
    image: Img2,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
    button: "SHOP NOW",
  },
  {
    id: 4,
    image: Img3,
    title: "iPed Pro Mini 6 - Powerful In Hand",
    description:
      "From $19.99/month for 36 months. $280.35 final payment due in month 37",
    button: "SHOP NOW",
  },
];

const BrandNew = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className=" mx-auto bg-white rounded-xl p-6 shadow-sm">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold uppercase">
            Brand New For You
          </h2>

          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition">
              ←
            </button>

            <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition">
              →
            </button>
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden bg-white"
            >
              {/* Image */}

              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="pt-5">

                <h3 className="font-bold text-xl leading-7 min-h-[70px]">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-6 min-h-[55px]">
                  {item.description}
                </p>

                <button className="mt-6 border-2 border-green-500 text-green-600 font-semibold rounded-lg px-7 py-3 hover:bg-green-500 hover:text-white transition">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandNew;