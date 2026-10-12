import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-700 pt-10 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-5 gap-6">
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-sm mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h3>
          <p className="text-xs text-gray-500">HOTLINE 24/7</p>
          <p className="text-green-600 font-semibold text-lg">(025) 3686 25 16</p>
          <p className="text-xs mt-2">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p className="text-xs">contact@Swootechmart.com</p>

          <div className="flex space-x-3 mt-3 text-gray-600">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-semibold text-sm mb-2">TOP CATEGORIES</h3>
          {["Laptops", "PC & Computers", "Cell Phones", "Tablets", "Gaming & VR", "Networks", "Cameras", "Sounds", "Office"].map((item) => (
            <p key={item} className="text-xs text-gray-500 hover:text-green-600 cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-sm mb-2">COMPANY</h3>
          {["About Swoo", "Contact", "Career", "Blog", "Sitemap", "Store Locations"].map((item) => (
            <p key={item} className="text-xs text-gray-500 hover:text-green-600 cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-semibold text-sm mb-2">HELP CENTER</h3>
          {["Customer Service", "Policy", "Terms & Conditions", "Track Order", "FAQs", "My Account", "Product Support"].map((item) => (
            <p key={item} className="text-xs text-gray-500 hover:text-green-600 cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-semibold text-sm mb-2">PARTNER</h3>
          {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item) => (
            <p key={item} className="text-xs text-gray-500 hover:text-green-600 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-6xl mx-auto px-6 mt-8 border-t pt-6">
        <p className="text-sm font-medium">
          SUBSCRIBE & GET <span className="text-red-500 font-semibold">10% OFF</span> FOR YOUR FIRST ORDER
        </p>
        <div className="flex items-center mt-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-l-md px-3 py-2 text-sm w-80 focus:outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-green-700">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          By subscribing, you’ve accepted our <span className="text-green-600 cursor-pointer">Policy</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 mt-8 border-t pt-4 flex justify-between items-center text-xs text-gray-500">
        <p>© 2024 <span className="font-semibold text-black">Shawonetc3</span>. All Rights Reserved</p>
        <div className="flex space-x-3 items-center text-gray-600">
          <span>💳 PayPal</span>
          <span>💳 Visa</span>
          <span>💳 Stripe</span>
          <span>💳 Klarna</span>
        </div>
        <p className="text-green-600 cursor-pointer hover:underline">Mobile Site</p>
      </div>
    </footer>
  );
};

export default Footer;
