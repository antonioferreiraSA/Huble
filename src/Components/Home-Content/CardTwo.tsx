import React from 'react'

const CardTwo = () => {
  return (
    <div className="flex p-8 items-center justify-center">
      {/* Left side */}
      <div className="w-1/3  ">
        {/* Replace the image URL with your actual image source */}
        <img
          src="https://www.hubledigital.com/hubfs/Asset%2049@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-[400px] h-auto"
        />
      </div>

      {/* Right side */}
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          YOU CAN
          <span className="text-[#fc4f5a]"> DO YOU</span>
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          <ul className="list-disc pl-4">
            <li>You have the flexibility to work how and where you want</li>
            <li>Work from home, an office, or both</li>
            <li>
              Work from anywhere in the world with the opportunity to relocate
              internationally to open positions
            </li>
            <li>Have time for life, learning, and thinking</li>
            <li>
              Radical flexibility — giving you flexibility on all aspects of
              work
            </li>
          </ul>
        </h2>
        <div className="mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2">
            Button 1
          </button>
          <button className="bg-green-500 text-white px-4 py-2">
            Button 2
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardTwo
