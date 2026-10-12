import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Mobile from '../assets/images/p.svg'
import Mobile1 from '../assets/images/p1.svg'
import Mobile2 from '../assets/images/p2.svg'

const products = [
    {
      id: 1,
      label: "SAVE $199.00",
      name: "SROK Smart Phone 128GB, Oled Retina",
      price: "$579.00",
      shipping: "FREE SHIPPING",
      stock: "In stock",
      image: Mobile,
    },
    {
      id: 2,
      label: "NEW",
      name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
      price: "$979.00",
      shipping: "$2.99 SHIPPING",
      stock: "In stock",
      image: Mobile1,
    },
    {
      id: 3,
      label: "NEW",
      name: "Samsung Galaxy X6 Ultra LTE 4G/12B Gb, Black Smartphone",
      price: "$659.00",
      shipping: "FREE SHIPPING, FREE GIFT",
      stock: "In stock",
      image: Mobile2,
    },
  ];
const Cart = () => {
  return (
    <section>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Cart" }]} />
         <div className=" bg-gray-100 flex justify-center py-10">
      <div className="flex w-[1000px] gap-6">
        {/* Left: Product List */}
        <div className="flex-1 space-y-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm flex items-center p-4 justify-between"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <span className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {item.label}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-red-600 font-semibold mt-1">{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="border px-2 py-1 rounded">-</button>
                    <span>1</span>
                    <button className="border px-2 py-1 rounded">+</button>
                  </div>
                  <p className="text-xs text-green-600 mt-2">{item.shipping}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {item.stock}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="w-[300px] bg-white rounded-lg border border-green-500 p-5 h-fit">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span className="font-medium">$1,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate:</span>
              <span className="font-medium">$600.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate:</span>
              <span className="font-medium">$137.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>ORDER TOTAL:</span>
              <span>$1,737.00</span>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700 transition">
           <Link to='/checkout' >CHECKOUT</Link> 
          </button>
        </div>
      </div>
    </div>
  
    </section>
  )
}

export default Cart
