import React from 'react'
import Banner from '../assets/images/bg.svg'
import Breadcrumb from '../components/Breadcrumb'
import AboutSection from '../About/AboutSection'
const About = () => {
  return (
     
    <section >
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "About" }]} />
      <div className="max-w-7xl mx-auto px-4 py-6">
       
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

        {/* Hero Banner */}
        <div
          className="relative h-[320px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
        >
       </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-12 py-10">

          {/* Left Text */}
          <div>
            <h3 className="font-bold text-lg leading-8 uppercase">
              Our Purpose Is To{" "}
              <span className="text-green-500">
                Enrich
              </span>
              <br />

              <span className="text-green-500">
                And Enhance Lives
              </span>{" "}
              Through
              <br />
              Technology
            </h3>
          </div>

          {/* Revenue */}
          <div>
            <h2 className="text-5xl font-bold">
              $12,5M
            </h2>

            <p className="uppercase text-xs text-gray-500 mt-3 leading-5">
              Total Revenue From
              <br />
              2001 - 2023
            </p>
          </div>

          {/* Orders */}
          <div>
            <h2 className="text-5xl font-bold">
              12K+
            </h2>

            <p className="uppercase text-xs text-gray-500 mt-3 leading-5">
              Orders Delivered
              <br />
              Successful On Everyday
            </p>
          </div>

          {/* Stores */}
          <div>
            <h2 className="text-5xl font-bold">
              725+
            </h2>

            <p className="uppercase text-xs text-gray-500 mt-3 leading-5">
              Store And Office In U.S
              <br />
              And Worldwide
            </p>
          </div>

        </div>

      </div>
      </div>
      <AboutSection/>
    </section>
  )
}

export default About
