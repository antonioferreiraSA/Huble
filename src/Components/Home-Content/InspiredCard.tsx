import React from 'react'

const InspiredCard = () => {
  return (
    <div className="flex p-8 items-center justify-center transition-transform duration-500 ease-in-out transform -translate-y-0 hover:-translate-y-2">
      {/* Left side */}
      <div className="w-1/2">
        {/* Replace the image URL with your actual image source */}
        <img
          src="https://www.hubledigital.com/hubfs/Asset%2051@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Right side */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          YOU CAN
          <span className="text-[#fc4f5a]"> GET INSPIRED</span>
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          <ul className="list-disc pl-4">
            <li>You are part of something worthwhile</li>
            <li>
              Working for an industry-leading HubSpot Agency with its own IP
            </li>
            <li>
              Work with passionate people who have great attitudes and are
              always willing to jump in and help
            </li>
            <li>Benefit from diverse global perspectives</li>
            <li>Work with teams and clients from all regions we operate in</li>
            <li>
              {' '}
              Gain exposure to business practices from different countries and
              industries
            </li>

            <li>
              Work from anywhere in the world, with the opportunity to relocate
              internationally to open positions
            </li>

            <li>Have time for life, learning and thinking</li>
          </ul>
        </h2>
        <div className="mb-4">
          <a
            href="https://www.hubledigital.com/" // Replace with the actual URL you want to open
            target="_blank"
          >
            <button className="border-grey-500 border-2 text-gray-600 px-4 py-2 mr-2 rounded-3xl">
              More Info
            </button>
          </a>
          <a
            href="https://www.hubledigital.com/careers/working-at-huble-digital" // Replace with the actual URL you want to open
            target="_blank"
          >
            <button className="bg-[#fc4f5a] text-white px-4 py-2 rounded-3xl">
              The Team
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default InspiredCard
