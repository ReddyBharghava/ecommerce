import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../assets/images/b.svg'
import Img1 from '../assets/images/b1.svg'
import Img2 from '../assets/images/b2.svg'
import Img3 from '../assets/images/b3.svg'
import Img4 from '../assets/images/b4.svg'
import Deals from '../Home/Deals'
import Img5 from '../assets/images/b5.svg'
import Img6 from '../assets/images/b6.svg'

const categories = [
"Laptops",
"PC & Computers",
"Cell Phones",
"Tablets",
 "Gaming & VR",
 "Networking",
"Cameras",
"Sounds",
 "Office",
 "Storage, USB",
 "Accessories",
 "Clearance",    
]

const Home = () => {
  return (
    <section >
      
        <div className="w-full mx-auto py-6 m-6">
      <div className="grid grid-cols-12 gap-4">

        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className=" rounded-xl shadow-sm p-6 h-full">
            <h3 className="text-red-500 font-bold uppercase mb-5">
              Sale 40% Off
            </h3>

            <ul className="space-y-4 text-gray-800">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">

          {/* Main Banner */}
          <div className="relative rounded-xl overflow-hidden h-[290px] bg-gray-400">

            <img
              src={Img}
              alt=""
              className="absolute right-0 top-0 h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-12 text-white max-w-sm">
              <h1 className="text-5xl font-bold leading-tight">
                Noise Cancelling
              </h1>

              <h2 className="text-4xl font-light mb-6">
                Headphone
              </h2>

              <p className="text-sm text-gray-200 leading-7">
                Premium Over-Ear Headphones
                <br />
                WiFi, Voice Assistant
                <br />
                Ultra Low Latency Mode
              </p>

              <button className="mt-8 bg-white text-black px-7 py-3 rounded-lg font-semibold hover:bg-gray-100">
                BUY NOW
              </button>
            </div>

            {/* Slider */}
            <div className="absolute bottom-5 right-8 bg-white rounded-full px-5 py-2 flex items-center gap-4">
              <button>{"<"}</button>
              <span className="font-semibold">3 / 3</span>
              <button>{">"}</button>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-4  ">

            {/* Card 1 */}
           <div className="relative h-[170px] w-full max-w-[460px] overflow-hidden rounded-2xl border border-gray-300 bg-[#10182b]">
      
      {/* Background Image */}
      <img
        src={Img1}
        alt="Sono Playgo 5"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay - optional */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Text */}
      <div className="relative z-10 p-7">
        <h2 className="max-w-[210px] text-2xl font-medium leading-tight ">
          Sono Playgo 5
          <br />
          from{" "}
          <span className="text-green-500">
            $569
          </span>
        </h2>

        <button className="mt-8 text-lg font-medium text-black underline underline-offset-4 hover:text-green-400">
          DISCOVER NOW
        </button>
      </div>
    </div>

            {/* Card 2 */}
             <div
      className="
        relative
        w-full
        max-w-[570px]
        h-[105px]
        sm:h-[120px]
        md:h-[140px]
        overflow-hidden
        rounded-xl
        bg-[#929399]
      "
    >
            {/* Keyboard Image */}
      <img
        src={Img2}
        alt="Logitech Bluetooth Keyboard"
        className="absolute right-[-15px] sm:right-[-10px]  md:right-[-5px]  top-1/2  -translate-y-1/4   h-auto  object-contain"/>
      {/* Text */}
      <div
        className=" relative z-10 h-full flex flex-col justify-center pl-6 sm:pl-7">
        <h2
          className="text-white text-xl sm:text-2xl md:text-[23px] font-normal leading-tight">
          Logitech Bluetooth
          <br />

          <span className="text-yellow-400">
            Keyboard
          </span>
        </h2>

        <p
          className="mt-5 text-white text-base sm:text-lg md:text-[18px]">
          Best for all device
        </p>
      </div>


    </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">

          {/* Watch Card */}
        
    
    <div className="max-w-sm  rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between shadow-md">
      {/* Watch Image */}
      <img
        src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaGVzJTIwd2l0aG91dCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        alt="Sport Water Resistance Watch"
        className="w-34 h-64 object-contain"
      />

      {/* Text Section */}
      <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p className=" text-sm font-medium">XOMIA</p>
        <h2 className="text-xl font-semibold leading-tight">
          Sport Water Resistance Watch
        </h2>
        <button className="mt-3 bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition">
          SHOP NOW
        </button>
      </div>
    </div>

          {/* Camera Card */}
          <div className="relative w-[380px] h-[260px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <img
        src={Img4}
        alt="OKODO HERO 11+ BLACK"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0  flex flex-col  p-4">
       <h2 className='font-extrabold text-3xl'>OKODO</h2>
        <p className=" text-2xl">  HERO 11+ <br/> BLACK today.</p>
        <p className='pt-12'>FROM</p>
        <span className='text-green-500 text-4xl'>$169</span>
      </div>
    </div>
        </div>

      </div>
      </div>
      <div className='grid grid-cols-1 grid-cols-2 container mx-auto gap-2 pb-3'>
        <div>
          <img src={Img5} alt="" />
        </div>
        <div>
          <img src={Img6} alt="" />
        </div>
      </div>
      <Deals/>
    </section>
  )
}

export default Home
