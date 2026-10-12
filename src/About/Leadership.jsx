import React from 'react'
import Img from '../assets/images/L1.svg'
import Img1 from '../assets/images/L2.svg'
import Img2 from '../assets/images/L3.svg'
import Img3 from '../assets/images/L4.svg'
import Img4 from '../assets/images/L5.svg'
const leaders = [
    {
      name: "Henry Avery",
      title: "CHAIRMAN",
      image: Img,
    },
    {
      name: "Michael Edward",
      title: "VICE PRESIDENT",
      image: Img1,
    },
    {
      name: "Eden Hazard",
      title: "CEO",
      image: Img2,
    },
    {
      name: "Robert Downey Jr",
      title: "CEO",
      image: Img3,
    },
    {
      name: "Nathan Drake",
      title: "STRATEGIST DIRECTOR",
      image: Img4,
    },
  ];
const Leadership = () => {
  return (
    <div className=" flex w-full h-full justify-center py-10">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold">LEADERSHIPS</h2>
          <span className="text-xs text-gray-500 cursor-pointer hover:text-green-600">
            View All
          </span>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-5 gap-4">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="rounded-md w-full h-full object-cover "
              />
              <h3 className="text-sm font-semibold">{leader.name}</h3>
              <p className="text-xs text-gray-500">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leadership
