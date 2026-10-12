import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Laptop from '../assets/images/product.svg'
const Checkout = () => {
  return (
    <section>
       <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Checkout" }]} />
    <div className=" bg-gray-100 flex justify-center py-10">
      <div className="bg-white rounded-lg shadow-md flex  p-8">
        {/* Left: Billing Details */}
        <div className="w-2/3 pr-8">
          <h2 className="text-sm font-semibold mb-4">CHECKOUT</h2>

          {/* Login & Coupon Links */}
          <div className="flex justify-between mb-6 text-xs text-gray-600">
            <p>
              Returning customer?{" "}
              <span className="text-red-500 cursor-pointer hover:underline">
                Click here to log in
              </span>
            </p>
            <p>
              Have a coupon?{" "}
              <span className="text-red-500 cursor-pointer hover:underline">
                Click here to enter your code
              </span>
            </p>
          </div>

          {/* Billing Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>United States (US)</option>
                <option>United Kingdom (UK)</option>
                <option>India</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                placeholder="House number and street name..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (Optional)"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State / County <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>Washington</option>
                <option>California</option>
                <option>Texas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center text-xs text-gray-600">
              <input type="checkbox" className="mr-2" />
              <span>Create an account?</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                rows="3"
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-1/3 bg-gray-50 rounded-md border p-5">
          <h3 className="font-semibold mb-4">Your Order</h3>
          <div className="text-sm space-y-2">
            <div className="flex justify-between font-medium">
              <span>PRODUCT</span>
              <span>SUB TOTAL</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div>
                <img src={Laptop} alt=""
                className='w-60 h-60' />
                <p className="font-medium">Pineapple Macbook Pro 2022 M1 512GB</p>
                <p className="text-gray-500 text-xs">× 3</p>
                <p className="text-gray-500 text-xs">Worldwide Standard Shipping Free</p>
              </div>
              <span className="text-red-500 text-sm">+ $9.50</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-green-600">
              <span>Order Total:</span>
              <span>$1,746.50</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <input type="radio" name="payment" defaultChecked />
              <div>
                <p className="font-medium">Direct Bank Transfer</p>
                <p className="text-xs text-gray-500">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <p className="font-medium">Cash on Delivery</p>
            </div>

            <div className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <p className="font-medium">
                PayPal{" "}
                <span className="text-blue-600 cursor-pointer hover:underline text-xs">
                  What’s PayPal?
                </span>
              </p>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-green-600 text-white py-2 rounded-md mt-6 font-medium hover:bg-green-700 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Checkout
