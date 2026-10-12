import React from "react";
import {
  FaChevronRight,
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaChair,
  FaPrint,
  FaWifi,
  FaVideo,
  FaProjectDiagram,
  FaMicrophone,
} from "react-icons/fa";
import Img from '../assets/images/b32.svg'
import Img1 from '../assets/images/b33.svg'
import Img2 from '../assets/images/b34.svg'
import Img3 from '../assets/images/b35.svg'
import Img4 from '../assets/images/b36.svg'
import Img5 from '../assets/images/b37.svg'
import Img6 from '../assets/images/b38.svg'
import Img7 from '../assets/images/b39.svg'
import Img8 from '../assets/images/b40.svg'
import Img9 from '../assets/images/b41.svg'
import Img10 from '../assets/images/b42.svg'
import Img11 from '../assets/images/b43.svg'
import Img12 from '../assets/images/b44.svg'
import Img13 from '../assets/images/b45.svg'
import Img14 from '../assets/images/b46.svg'

const categories = [
  {
    title: "AUDIOS & CAMERAS",
    bannerTitle: (
      <>
        Best
        <br />
        Speaker
        <br />
        2023
      </>
    ),
    bannerImage: Img,
    bannerClass: "bg-[#243b69]",
    products: [
      {
        name: "Speaker",
        items: "12 Items",
        icon: <FaHeadphones />,
        image: Img3,
      },
      {
        name: "DSLR Camera",
        items: "9 Items",
        icon: <FaCamera />,
        image: Img4,
      },
      {
        name: "Earbuds",
        items: "5 Items",
        icon: <FaHeadphones />,
        image: Img5,
      },
      {
        name: "Microphone",
        items: "12 Items",
        icon: <FaMicrophone />,
        image: Img6,
      },
    ],
  },

  {
    title: "GAMING",
    
    
    bannerImage: Img1,
    bannerClass: "bg-[#e5e7ee]",
    products: [
      {
        name: "Monitors",
        items: "28 Items",
        icon: <FaGamepad />,
        image: Img7,
      },
      {
        name: "Chair",
        items: "12 Items",
        icon: <FaChair />,
        image: Img8,
      },
      {
        name: "Controller",
        items: "9 Items",
        icon: <FaGamepad />,
        image: Img9,
      },
      {
        name: "Keyboards",
        items: "30 Items",
        icon: <FaGamepad />,
        image: Img10,
      },
    ],
  },

  {
    title: "OFFICE EQUIPMENTS",
    
    bannerImage: Img2,
    bannerClass: "bg-[#272727]",
    products: [
      {
        name: "Printers",
        items: "9 Items",
        icon: <FaPrint />,
        image: Img11,
      },
      {
        name: "Network",
        items: "90 Items",
        icon: <FaWifi />,
        image: Img12,
      },
      {
        name: "Security",
        items: "12 Items",
        icon: <FaVideo />,
        image: Img13,
      },
      {
        name: "Projectors",
        items: "12 Items",
        icon: <FaProjectDiagram />,
        image: Img14,
      },
    ],
  },
];

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-black">
          {category.title}
        </h2>

        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-600 transition">
          View All
          <FaChevronRight className="text-[9px]" />
        </button>
      </div>

      {/* Banner */}
      <div
        className={`relative h-[145px] rounded-lg overflow-hidden mb-5 ${category.bannerClass}`}
      >
        {/* Text */}
        <div
          className={`absolute z-10 ${
            category.title === "OFFICE EQUIPMENTS"
              ? "left-1/2 -translate-x-1/2 top-5 text-center text-white w-full"
              : "left-6 top-6 text-white"
          }`}
        >
          <p className="text-sm font-medium leading-6">
            {category.bannerTitle}
          </p>
        </div>

        {/* Image */}
        <img
          src={category.bannerImage}
          alt={category.title}
          className={`absolute inset-0 w-full h-full object-cover ${
            category.title === "OFFICE EQUIPMENTS"
              ? "opacity-80"
              : "opacity-90"
          }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6" />

      {/* Products */}
      <div className="grid grid-cols-2 gap-x-7 gap-y-7">
        {category.products.map((product, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer"
          >
            {/* Circular Image */}
            <div className="mx-auto w-[92px] h-[92px] rounded-full bg-[#eef0f5] flex items-center justify-center overflow-hidden mb-3 transition group-hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-[70px] h-[70px] object-contain mix-blend-multiply"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
              {product.name}
            </h3>

            {/* Items */}
            <p className="text-[11px] text-gray-500 mt-1">
              {product.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryShowcase = () => {
  return (
    <section className="w-full py-6 px-4 sm:px-6">
      <div className=" mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;