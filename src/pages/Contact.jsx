import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import  Img from '../assets/images/contact.svg'
import Maps from '../components/Maps'
const Contact = () => {
  return (
    <section>
       <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Shop" }, { label: "contact" }]} />
    
    <div className="  flex justify-center py-10">
      <div className=" rounded-lg shadow-md flex w-[1280px] p-8">
        {/* Left: Contact Form */}
        <div className="w-2/3 pr-8">
          <h2 className="text-sm font-semibold mb-2">READY TO WORK WITH US</h2>
          <p className="text-gray-500 text-sm mb-6">
            Contact us for all your questions and opinions
          </p>

          <form className="space-y-4">
            {/* Name Fields */}
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

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Country */}
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

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center text-xs text-gray-600">
              <input type="checkbox" className="mr-2" />
              <span>
                I want to receive news and updates once in a while. By submitting, I’m agreed to the{" "}
                <span className="text-green-600 cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="w-1/3 space-y-6">
          <div className="bg-gray-100 p-4 rounded-md text-sm">
            <p className="text-gray-500 uppercase text-xs mb-1">
              UNITED STATES (HEAD QUATER)
            </p>
            <p>152 Thatcher Road St, Mahattan, 10463, US</p>
            <p>(+025) 3886 25 16</p>
            <p className="text-green-600">hello@swattechmart.com</p>

            <p className="text-gray-500 uppercase text-xs mt-4 mb-1">
              UNITED KINGDOM (BRANCH)
            </p>
            <p>12 Buckingham Rd, Thornthwaite, HG3 4TY, UK</p>
            <p>(+718) 895-5350</p>
            <p className="text-green-600">contact@swattechmart.co.uk</p>

            <div className="flex space-x-3 mt-4 text-gray-600">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          <img
            src={Img}
            alt="Contact illustration"
            className="rounded-md w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
    <Maps/>
    </section>
  )
}

export default Contact
