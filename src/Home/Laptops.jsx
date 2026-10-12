import React from 'react'
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Img from '../assets/images/b20.svg'
import Img1 from '../assets/images/b21.svg'
import Img2 from '../assets/images/b22.svg'
import Img3 from '../assets/images/b23.svg'
import Img4 from '../assets/images/b24.svg'
import Img5 from '../assets/images/b25.svg'
import Img6 from '../assets/images/b26.svg'
import Img7 from '../assets/images/b27.svg'
import Img8 from '../assets/images/b28.svg'
import Img9 from '../assets/images/b29.svg'
import Img10 from '../assets/images/b30.svg'
import Img11 from '../assets/images/b31.svg'

const categories = [
  {
    name: "Macbook",
    items: "74 Items",
    image: Img1,
  },
  {
    name: "Gaming PC",
    items: "5 Items",
    image: Img2,
  },
  {
    name: "Laptop Office",
    items: "22 Items",
    image: Img3,
  },
  {
    name: 'Laptop 15"',
    items: "55 Items",
    image: Img4,
  },
  {
    name: "M1 2023",
    items: "32 Items",
    image: Img5,
  },
  {
    name: "Secondhand",
    items: "16 items",
    image : Img6
  },
];

const products = [
  {
    id: 1,
    title: "Pineapple Macbook Pro 2022 M1 / 512 GB",
    image: Img7,
    reviews: 152,
    price: "$579.00",
    badge: "NEW",
    shipping: "FREE SHIPPING",
    stock: "In Stock",
  },
  {
    id: 2,
    title: "C&O Bluetooth Speaker",
    image: Img8,
    reviews: "",
    price: "$979.00",
    badge: "NEW",
    shipping: "FREE SHIPPING",
    stock: "In Stock",
  },
  {
    id: 3,
    title: "Gigaby Custom Case, i7/16GB / SSD 256GB",
    image: Img9,
    reviews: 5,
    price: "$1,259.00",
    badge: "",
    shipping: "FREE SHIPPING",
    gift: "FREE GIFT",
    stock: "In Stock",
  },
  {
    id: 4,
    title: "BEOS PC Gaming Case",
    image: Img10,
    reviews: 9,
    price: "$1,239.00",
    oldPrice: "$1,619.00",
    save: "$59",
    shipping: "$2.98 SHIPPING",
    stock: "Contact",
  },
  {
    id: 5,
    title: "aMoc All-in-one Computer M1",
    image: Img11,
    reviews: 8,
    price: "$1,729.00",
    shipping: "FREE SHIPPING",
    stock: "Contact",
  },
];

const Laptops = () => {
  return (
   <section className="bg-gray-100 py-8">
      <div className="mx-auto bg-white rounded-xl shadow-sm p-6">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            BEST LAPTOPS & COMPUTERS
          </h2>

          <button className="text-gray-500 hover:text-green-600">
            View All
          </button>
        </div>

        {/* Banner */}

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">

          {/* Left Banner */}

          <div className="bg-[#2b2b2b] rounded-xl p-8 flex items-center justify-between overflow-hidden">

            <div>
              <h1 className="text-white text-5xl font-bold">
                Mobok 2
              </h1>

              <h2 className="text-gray-300 text-5xl">
                Superchard
              </h2>

              <h3 className="text-gray-300 text-3xl mt-2">
                By M2
              </h3>

              <p className="text-gray-300 mt-8">
                Start from{" "}
                <span className="text-green-500 font-bold">
                  $1,199
                </span>
              </p>
            </div>

            <img
              src={Img}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Categories */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {item.items}
                  </p>
                </div>

                <img
                  src={item.image}
                  className="w-14 h-14 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 border-t"></div>

        {/* Product Slider */}

        <div className="relative">

          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-16 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white">
            <FaChevronLeft />
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 w-10 h-16 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white">
            <FaChevronRight />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-10">

            {products.map((item) => (
              <div key={item.id} className="relative">

                {/* Circle */}

                <div className="absolute top-0 right-4 w-7 h-7 rounded-full bg-gray-200"></div>

                {/* Badge */}

                {item.badge && (
                  <span className="absolute top-2 left-0 bg-black text-white text-xs px-3 py-1 rounded">
                    {item.badge}
                  </span>
                )}

                {item.save && (
                  <span className="absolute top-2 left-0 bg-green-600 text-white text-xs px-3 py-2 rounded">
                    SAVE
                    <br />
                    {item.save}
                  </span>
                )}

                {/* Image */}

                <div className="h-52 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-44 object-contain"
                  />
                </div>

                <p className="text-center text-gray-500 text-sm">
                  ({item.reviews})
                </p>

                <h3 className="font-semibold text-lg leading-6 min-h-[70px] mt-3">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-3xl font-bold text-red-500">
                    {item.price}
                  </span>

                  {item.oldPrice && (
                    <span className="line-through text-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded text-xs">
                    {item.shipping}
                  </span>

                  {item.gift && (
                    <span className="bg-red-50 text-red-500 px-3 py-1 rounded text-xs">
                      {item.gift}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <FaCheckCircle className="text-green-600" />
                  <span>{item.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Laptops
