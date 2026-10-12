import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Img from '../assets/images/login.svg'
const Login = () => {
  return (
   <div>
    <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Login" }]} />
  <div className="flex items-center justify-center pt-8 bg-gray-100">
     
      <div className="bg-white rounded-lg shadow-md flex w-[900px] p-8">
        {/* Left Illustration */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={Img}
            alt="Login Illustration"
            className="w-80 h-auto"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mb-6">LOGIN TO CONTINUE</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="...."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 cursor-pointer hover:text-green-600">
                Forget Password ?
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
            >
              LOGIN
            </button>

            <p className="text-sm text-gray-500 text-center">
              NEW USER ?{" "}
              <span className="text-green-600 font-medium cursor-pointer hover:underline">
               <Link to='/register'> SIGN UP</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login

