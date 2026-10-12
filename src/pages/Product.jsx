import React from 'react'
import Img from '../assets/images/c.svg'
import Img2 from '../assets/images/d8.svg'

import ProductDetails from '../ShopCell/ProductDetails'
const Product = () => {
  return (
    <section>
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        Home / Shop / Top Cell Phones & Tablets /{" "}
        <span className="font-semibold text-gray-800">
          Somseng Galatero X6 Ultra LTE 4G/128GB Black Smartphone
        </span>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6 bg-white rounded-lg shadow p-6">
        {/* Left Section - Product Images */}
        <div className="col-span-4 flex flex-col items-center space-y-4">
          <span className="bg-black text-gray-600 text-xs px-2 py-1 rounded">NEW</span>
          <img
            src={Img}
            alt="Smartphone"
            className="rounded-lg"
          />
         
        </div>

        {/* Middle Section - Product Details */}
        <div className="col-span-5 space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">
            Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
          </h2>
          <p className="text-red-600 text-2xl font-bold">$569.00 - $609.00</p>

          <ul className="text-gray-700 text-sm space-y-1">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4×SMD DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>

          <div className="flex space-x-3 mt-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">
              FREE SHIPPING
            </span>
            <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded">
              FREE GIFT
            </span>
          </div>

          {/* Color Options */}
          <div>
            <p className="font-medium text-gray-800 mt-4">COLOR: Midnight Blue</p>
            <div className="flex space-x-3 mt-2">
              {["Midnight Blue", "Deep Purple", "Space Black"].map((color) => (
                <div
                  key={color}
                  className="border rounded-lg px-3 py-2 text-sm text-gray-700 hover:border-green-500 cursor-pointer"
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* Memory Options */}
          <div>
            <p className="font-medium text-gray-800 mt-4">MEMORY SIZE: 128GB</p>
            <div className="flex space-x-3 mt-2">
              {["64GB", "128GB", "256GB", "512GB"].map((size) => (
                <div
                  key={size}
                  className={`border rounded-lg px-3 py-2 text-sm cursor-pointer ${
                    size === "128GB"
                      ? "border-green-500 bg-green-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Promotion */}
          <div className="bg-gray-50 border rounded-lg p-4 mt-4 text-sm text-gray-700">
            <p>
              🎁 Buy <span className="text-red-500 font-semibold">02</span> boxes get a{" "}
              <span className="font-semibold">Snack Tray</span>
            </p>
            <p>
              🎉 Buy <span className="text-red-500 font-semibold">04</span> boxes get a{" "}
              <span className="font-semibold">free Block Toys</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Promotion expires in: 9:00pm, 25/5/2024
            </p>
          </div>

          {/* SKU Info */}
          <div className="text-sm text-gray-600 mt-4">
            <p>SKU: ABC025168</p>
            <p>
              CATEGORY: <span className="font-medium">Cell Phones & Tablets</span>
            </p>
            <p>
              BRAND: <span className="font-medium">sumsong</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-600">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Right Section - Checkout */}
        <div className="col-span-3 bg-gray-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">TOTAL PRICE:</h3>
          <p className="text-3xl font-bold text-gray-900">$609.00</p>
          <p className="text-sm text-gray-600">affirm $49/mo in 12 months</p>
          <p className="text-green-600 font-medium">In stock</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 mt-2">
            <button className="px-3 py-1 bg-gray-200 rounded">-</button>
            <span className="font-semibold">1</span>
            <button className="px-3 py-1 bg-gray-200 rounded">+</button>
          </div>

          {/* Buttons */}
          <button className="w-full bg-green-600 text-white py-2 rounded mt-3 hover:bg-green-700">
            ADD TO CART
          </button>
          <button className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500">
            BUY WITH PayPal
          </button>

          {/* Safe Checkout */}
          <div className="text-xs text-gray-600 mt-4">
            Guaranteed Safe Checkout:
            <div className="flex space-x-2 mt-2">
             <img src={Img2} alt="" />
            </div>
          </div>

          {/* Contact Info */}
          <div className=" text-white rounded-lg p-4 mt-4 text-center">
            <p className="font-semibold">Quick Order 24/7</p>
            <p className="text-lg font-bold">(025) 3886 25 16</p>
          </div>

          <p className="text-sm text-gray-600 text-center mt-2">
            Ships from <span className="font-medium">United States</span>
          </p>
        </div>
      </div>
    </div>
    <ProductDetails/>
    </section>
  )
}

export default Product
