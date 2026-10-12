import React from 'react'
import  { useState } from "react";
import {
  FaPlus,
  FaHeart,
  FaCheck,
} from "react-icons/fa";
import Img from '../assets/images/c1.svg'
import Img1 from '../assets/images/c2.svg'
import Img2 from '../assets/images/c3.svg'
import Img3 from '../assets/images/b8.svg'
import Img4 from '../assets/images/b9.svg'
import ProductDescription from './ProductDescription';
import ManufacturerSection from './ManufacturerSection';
import RelatedProducts from './RelatedProducts';
import RecentlyViewed from './RecentlyViewed';
import TopCellPhones from '../pages/TopCellPhones';


const products = [
  {
    id: 1,
    name: "Samsung Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone",
    price: 569,
    image: Img,
    checked: true,
  },
  {
    id: 2,
    name: "BOSO 2 Wireless On Ear Headphone",
    price: 369,
    image: Img1,
    checked: false,
  },
  {
    id: 3,
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: 129,
    image: Img2,
    checked: false,
  },
];
const ProductDetails = () => {
      const [selected, setSelected] = useState(
    products.filter((product) => product.checked).map((product) => product.id)
  );

  const toggleProduct = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const totalPrice = products
    .filter((product) => selected.includes(product.id))
    .reduce((total, product) => total + product.price, 0);

  return (
    <section >
      <div className="w-full  p-3 sm:p-5">
      <div className="mx-auto ">

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_265px] gap-2">

          {/* Frequently Bought Together */}
          <div className="bg-white rounded-xl p-6 sm:p-8">

            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-900 uppercase mb-8">
              Frequently Bought Together
            </h2>

            {/* Products + Total */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

              {/* Product Area */}
              <div className="flex-1">

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5">

                  {products.map((product, index) => (
                    <React.Fragment key={product.id}>

                      {/* Product */}
                      <div className="w-[145px] sm:w-[160px] text-center">

                        {/* Product Image */}
                        <div className="h-[150px] flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-[135px] max-w-[140px] object-contain"
                          />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-2 mt-3 text-left">
                          <button
                            onClick={() => toggleProduct(product.id)}
                            className={`mt-1 h-4 w-4 rounded border flex items-center justify-center shrink-0 ${
                              selected.includes(product.id)
                                ? "bg-green-500 border-green-500 text-white"
                                : "bg-white border-gray-300"
                            }`}
                          >
                            {selected.includes(product.id) && (
                              <FaCheck size={8} />
                            )}
                          </button>

                          <p className="text-xs leading-5 text-gray-600">
                            {product.id === 1 && (
                              <strong className="text-gray-900">
                                This item:{" "}
                              </strong>
                            )}

                            {product.name}
                          </p>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-bold text-red-500">
                          (${product.price.toFixed(2)})
                        </span>
                      </div>

                      {/* Plus */}
                      {index < products.length - 1 && (
                        <div className="hidden sm:flex w-7 h-7 rounded-full bg-gray-200 items-center justify-center text-gray-700 shrink-0">
                          <FaPlus size={11} />
                        </div>
                      )}

                    </React.Fragment>
                  ))}

                </div>

              </div>

              {/* Total Price */}
              <div className="lg:w-[190px] shrink-0 lg:pt-2">

                <p className="text-[11px] uppercase text-gray-500 mb-2">
                  Total Price:
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mb-5">
                  ${totalPrice.toFixed(2)}
                </h3>

                <button
                  className="w-full bg-green-500 hover:bg-green-600
                  text-white font-medium text-sm py-3 rounded-lg
                  transition"
                >
                  ADD TO CART
                </button>

                <button className="flex items-center gap-2 mt-4 text-gray-500 text-sm hover:text-gray-800">
                  <FaHeart size={13} />
                  Add all to Wishlist
                </button>

              </div>
            </div>
          </div>

          {/* Right Promotional Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2">

            {/* Sale Banner */}
            <div className="relative h-[160px] overflow-hidden rounded-xl bg-[#55575a]">

              <div className="absolute top-3 right-4 bg-lime-400 text-black font-bold text-xl px-3 py-1 rounded">
                50%
              </div>

              <div className="absolute left-5 top-3 text-[40px] font-bold tracking-wide text-transparent opacity-30"
                style={{ WebkitTextStroke: "2px #aaa" }}
              >
                SALE
              </div>

              <img
                src={Img3}
                alt="Gaming sale"
                className="absolute right-0 bottom-0 h-[145px] w-full object-contain"
              />
            </div>

            {/* iPad Banner */}
            <div className="relative h-[160px] overflow-hidden rounded-xl bg-[#202225]">

              <div className="absolute left-6 top-6 z-10 text-white">
                <h3 className="text-xl font-bold">
                  iPad Pro
                </h3>

                <p className="text-lg">
                  Mini 5
                </p>

                <p className="mt-6 text-xs text-gray-400">
                  FROM
                </p>

                <p className="text-xl text-green-500">
                  $169
                </p>
              </div>

              <img
                src={Img4}
                alt="iPad promotion"
                className="absolute right-0 bottom-0 h-full w-[70%] object-cover"
              />
            </div>

          </div>
        </div>
      </div>
      <ProductDescription/>
      <ManufacturerSection/>
      <RelatedProducts/>
      <RecentlyViewed/>
     
   
      
      </div>
    </section>

  )
}

export default ProductDetails
