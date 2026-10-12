import React from 'react'
import Img from '../assets/images/1.svg'
const Page = () => {
  return (
    
    <div className="  flex justify-center py-10">
      <div className="bg-white rounded-lg shadow-md  p-8">
        {/* Mission and Vision Section */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold mb-2">OUR MISSION AND VISION</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. 
            Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. 
            Fusce malesuada nisi id felis placerat porta vel sed augue.{" "}
            <span className="font-semibold text-gray-800">Vivamus mollis mauris</span> vitae rhoncus egestas. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>

          <img
            src={Img}
            alt="City buildings"
            className="rounded-md w-full h-[300px] object-cover"
          />
        </section>

        {/* Company Timeline Section */}
        <section>
          <h2 className="text-sm font-semibold mb-2">
            FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. 
            Maecenas in consectetur erat.
          </p>

          <div className="grid grid-cols-2 gap-8 text-sm text-gray-700">
            {/* Left Column */}
            <div className="space-y-2">
              <p><span className="font-semibold">1997:</span> A small store located in Brooklyn Town, USA</p>
              <p><span className="font-semibold">1998:</span> It is a long established fact that a reader will be distracted by the readable</p>
              <p><span className="font-semibold">2000:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <p><span className="font-semibold">2002:</span> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              <p><span className="font-semibold">2004:</span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
              <p><span className="font-semibold">2005:</span> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
              <p><span className="font-semibold">2006:</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
              <p><span className="font-semibold">2010:</span> All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
              <p><span className="font-semibold">2013:</span> Lorem Ipsum comes from sections 1.10.32</p>
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <p><span className="font-semibold">2014:</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
              <p><span className="font-semibold">2016:</span> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
              <p><span className="font-semibold">2020:</span> Lorem Ipsum comes from sections 1.10.32</p>
              <p><span className="font-semibold">2021:</span> Making this the first true generator on the Internet</p>
              <p><span className="font-semibold">2022:</span> Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition</p>
              <p><span className="font-semibold">2023:</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
