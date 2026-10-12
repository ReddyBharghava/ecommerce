import React from 'react'

const Maps = () => {
  return (
    
    <div className=" bg-gray-100 flex justify-center py-10">
      <div className="bg-white rounded-lg shadow-md w-[1550px] p-6">
        <h2 className="text-sm font-semibold mb-4">FIND US ON GOOGLE MAP</h2>

        {/* Google Map Embed */}
        <div className="w-full h-[400px] rounded-md overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.692147792839!2d10.5036!3d43.8427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591c9b8b3b3b1%3A0x3b9b6e2b6b6b6b6b!2sChiesa%20di%20San%20Francesco!5e0!3m2!1sen!2sit!4v1690000000000!5m2!1sen!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Routing Button */}
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Chiesa+di+San+Francesco,+Lucca,+Italy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}

export default Maps
