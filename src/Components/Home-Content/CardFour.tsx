import React from 'react'

const CardFour = () => {
  return (
    <div className="flex p-8 items-center justify-center">
      {/* Left side */}
      <div className="w-1/2 pr-6">
        <h1 className="text-4xl font-bold mb-4">
          YOU CAN
          <span className="text-[#fc4f5a]"> GROW</span>
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          <ul className="list-disc pl-4">
            <li>We help you grow as people and professionals</li>
            <li>Knowledge is shared openly and consistently</li>
            <li>
              Onboarding is structured and includes a mix of shadowing and
              independent learning
            </li>
            <li>We provide access to world-class certifications</li>
            <li>
              We empower you to carve your own path by providing access to a
              dedicated L&D department
            </li>
            <li>
              We grow talent through our world-class graduate programme and
              providing coaching opportunities
            </li>
            <li>
              We offer regular promotion opportunities (31 in the last 12
              months)
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

      {/* Right side */}
      <div className="w-1/2">
        {/* Replace the image URL with your actual image source */}
        <img
          src="https://www.hubledigital.com/hubfs/Asset%2050@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-[400px] h-auto"
        />
      </div>
    </div>
  )
}

export default CardFour
