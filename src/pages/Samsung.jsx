import React, { useState } from 'react'
import Img from '../assets/images/Product1.svg'
import Img1 from '../assets/images/Product2.svg'

const Samsung = () => {
     const [selectedColor, setSelectedColor] = useState("Midnight Blue");
  const [selectedMemory, setSelectedMemory] = useState("128GB");
  const [quantity, setQuantity] = useState(1);

  const colors = ["Midnight Blue", "Deep Purple", "Space Black"];
  const memories = ["64GB", "128GB", "256GB", "512GB"];
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 bg-gray-50 rounded-lg">
      {/* Left: Product Images */}
      <div className="flex flex-col items-center">
        <img
          src={Img}
          alt="Phone"
          className="rounded-lg shadow-md"
        />
        <div className="flex space-x-3 mt-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={Img1}
              alt={`Thumbnail ${i}`}
              className="border rounded-md hover:border-blue-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
        </h2>
        <p className="text-gray-600 mb-2">$569.00 - $609.00</p>

        <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
          <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
          <li>DDR5 Compatible: 4×8SMD DIMMs with XMP 3.0 Memory</li>
          <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
        </ul>

        <div className="flex space-x-3 mb-4">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
            FREE SHIPPING
          </span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
            FREE GIFT
          </span>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">COLOR:</h3>
          <div className="flex space-x-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`border rounded-md px-3 py-2 text-sm ${
                  selectedColor === color
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Memory Selection */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">MEMORY SIZE:</h3>
          <div className="flex space-x-3">
            {memories.map((mem) => (
              <button
                key={mem}
                onClick={() => setSelectedMemory(mem)}
                className={`border rounded-md px-3 py-2 text-sm ${
                  selectedMemory === mem
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {mem}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Buttons */}
        <div className="flex items-center space-x-3 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 border rounded-md"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded-md"
          >
            +
          </button>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-md mb-3 hover:bg-green-600">
          ADD TO CART
        </button>
        <button className="w-full bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500">
          BUY WITH PayPal
        </button>

        {/* Promotion */}
        <div className="mt-6 bg-green-50 p-3 rounded-md text-sm">
          <p>🎁 Buy 02 boxes get a Snack Tray</p>
          <p>🎁 Buy 04 boxes get a free Block Toys</p>
          <p className="text-gray-500 mt-1">
            Promotion expires at 9:00pm, 25/5/2024
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-sm text-gray-600">
          <p>SKU: ABC025168</p>
          <p>CATEGORY: Cell Phones & Tablets</p>
          <p>
            BRAND: <span className="text-green-600 font-medium">sumsong</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Samsung
