import React from 'react'
import Img1 from '../assets/images/d.svg'
import Img2 from '../assets/images/d8.svg'
import Img3 from '../assets/images/d9.svg'
import Img4 from '../assets/images/d2.svg'
import RelatedProducts from '../Macbook/RelatedProducts'
const Laptops = () => {
  return (
   <section>
    <div className=" p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        Home / Shop / Top Cell Phones & Tablets /{" "}
        <span className="font-semibold text-gray-800">
          Pinnapple Macbook Pro 2022 M1 / 512GB, Dark Grey
        </span>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-6 bg-white rounded-lg shadow p-6">
        {/* Left Section - Product Images */}
        <div className="col-span-4 flex flex-col items-center space-y-4">
    
          <img
            src={Img1}
            alt="Laptop"
          
          />
        
        </div>

        {/* Middle Section - Product Details */}
        <div className="col-span-5 space-y-4">
          <h2 className="font-semibold text-gray-800 text-lg">
            Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey
          </h2>
          <p className="text-red-600 text-2xl font-bold">$579.00</p>

          <ul className="text-gray-700 text-sm space-y-1">
            <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
            <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
            <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
          </ul>

          <div className="flex space-x-3 mt-2">
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded">
              FREE SHIPPING
            </span>
          </div>

          <p className="text-green-600 font-medium mt-3">In stock</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 mt-2">
            <p className="text-gray-700 font-medium">qty</p>
            <div className="flex items-center border rounded-lg">
              <button className="px-3 py-1 bg-gray-200">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 bg-gray-200">+</button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center space-x-3 mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              ADD TO CART
            </button>
            <button className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200">
              ❤️
            </button>
          </div>

          {/* Safe Checkout */}
          <div className="text-xs text-gray-600 mt-4">
            Guaranteed Safe Checkout:
            <div className="flex space-x-2 mt-2">
              <img src={Img2} alt="" />
            </div>
          </div>

          {/* SKU Info */}
          <div className="text-sm text-gray-600 mt-4">
            <p>SKU: ABC025168</p>
            <p>
              CATEGORY: <span className="font-medium">Cell Phones & Tablets</span>
            </p>
            <p>
              TAGS: <span className="font-medium">Laptop, Macbook, Computer, M1</span>
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

        {/* Right Section - Cart Summary */}
        <div className="col-span-3 bg-gray-50 rounded-lg p-6 space-y-4">
          {/* Brand */}
          <div className="bg-gray-400 rounded-lg p-4 shadow text-center">
            <p className="text-sm text-gray-600">
              Brand: <span className="font-semibold">Sonex</span>
            </p>
            <div className='container mx-auto pl-12 pt-4 '>
              <img src={Img3} alt="" />
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Your Cart</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div ><img src={Img4} alt="" /></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Pinnapple Macbook Pro 2022 M1 / 512GB
                  </p>
                  <p className="text-xs text-gray-500">3 × $579.00</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">✕</button>
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-700 mt-3">
              <span>Sub Total:</span>
              <span>$1,737.00</span>
            </div>

            <div className="flex space-x-3 mt-4">
              <button className="w-1/2 bg-gray-800 text-white py-2 rounded hover:bg-gray-900">
                VIEW CART
              </button>
              <button className="w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700">
                CHECKOUT
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-2">
            Ships from <span className="font-medium">United States</span>
          </p>
        </div>
      </div>
    </div>
    <RelatedProducts/>
    </section>
  )
}

export default Laptops
