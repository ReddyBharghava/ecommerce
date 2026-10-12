import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Avatar from '../assets/images/Avatar.svg'
const Profile = () => {
  return (
    <section>
       <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "profile" }]} />
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white rounded-lg shadow-md flex w-[1200px]">
        {/* Sidebar */}
        <div className="w-1/3 p-6 flex flex-col items-center">
          <img
            src={Avatar}
            alt="Profile"
            className="w-55 h-44 rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold">Mark Cole</h2>
          <p className="text-sm text-gray-500 mb-6">swoo@gmail.com</p>

          <div className="space-y-3 w-full">
            <button className="w-full bg-green-600 text-white py-2 rounded-md flex justify-between items-center px-4">
              Account info <span>→</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-between items-center px-4 hover:bg-gray-200">
              My order <span>→</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-between items-center px-4 hover:bg-gray-200">
              My address <span>→</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-between items-center px-4 hover:bg-gray-200">
              Change password <span>→</span>
            </button>
          </div>
        </div>

        {/* Account Info Form */}
        <div className="w-2/3 p-8">
          <h2 className="text-xl font-semibold mb-6">Account Info</h2>

          <form className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Mark"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Cole"
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
                defaultValue="swoo@gmail.com"
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
                defaultValue="+1 0231 4554 452"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition"
            >
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Profile
