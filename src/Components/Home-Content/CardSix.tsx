import React from 'react'

const CardSix = () => {
  return (
    <div className="flex p-8 items-center justify-center">
      {/* Left side */}
      <div className="w-1/2 pr-6">
        <h1 className="text-4xl font-bold mb-4">
          YOU FEEL
          <span className="text-[#fc4f5a]"> VALUED</span>
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          <ul className="list-disc pl-4">
            <li>We are investing in you</li>
            <li>
              Helping you reach your goals with regular performance feedback,
              pushing you to improve your skills and expertise
            </li>
            <li>
              Encouraging you to speak up with any ideas that can help us be
              more successful
            </li>
            <li>
              Recognising performance and contributions with additional awards,
              commissions, referral fees and bonuses
            </li>
            <li>
              Paying you more than the industry standard and regularly
              increasing your salary
            </li>
            <li>Benefits that work for each location</li>
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
          src="https://www.hubledigital.com/hubfs/Asset%2052@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-[400px] h-auto"
        />
      </div>
    </div>
  )
}

export default CardSix
