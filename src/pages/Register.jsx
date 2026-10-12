import React from 'react'
import { useState } from "react";
import Breadcrumb from '../components/Breadcrumb'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Img from "../assets/images/login.svg"; 
const Register = () => {
     const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <section>
       <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Register" }]} />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden">

        {/* Left Side */}
        <div className="flex items-center justify-center p-10">
          <img
            src={Img}
            alt="Register"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <div className="w-full max-w-md mx-auto py-12">

            <h1 className="text-4xl font-bold text-green-600">
              Register
            </h1>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs mt-2 mb-10">
              Join To Us
            </p>

            {/* Name */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Jhon Deo"
                className="w-full border rounded-md h-12 px-4 outline-none focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Example@gmail.com"
                className="w-full border rounded-md h-12 px-4 outline-none focus:border-green-500"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••"
                  className="w-full border rounded-md h-12 px-4 pr-12 outline-none focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-8">
              <label className="text-sm font-medium mb-2 block">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••"
                  className="w-full border rounded-md h-12 px-4 pr-12 outline-none focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button className="w-40 h-12 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition">
              REGISTER
            </button>

            <p className="mt-6 text-sm text-gray-500">
              Already User ?
              <span className="text-green-600 font-semibold cursor-pointer ml-1">
                LOGIN
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Register
