import React from 'react'

const ValuedCard = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 items-center justify-center transition-transform duration-500 ease-in-out transform -translate-y-0 hover:-translate-y-2">
      {/* Left side */}
      <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          YOU FEEL
          <span className="text-[#fc4f5a]"> VALUED</span>
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          <ul
            style={{ fontFamily: 'proxima_nova, sans-serif' }}
            className="list-disc pl-4"
          >
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
          <a
            href="https://www.hubledigital.com/" // Replace with the actual URL you want to open
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-grey-500 border-2 text-gray-600 px-4 py-2 mr-2 rounded-3xl">
              More Info
            </button>
          </a>
          <a
            href="https://www.hubledigital.com/careers/working-at-huble-digital" // Replace with the actual URL you want to open
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#fc4f5a] text-white px-4 py-2 rounded-3xl">
              The Team
            </button>
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2">
        {/* Replace the image URL with your actual image source */}
        <img
          src="https://www.hubledigital.com/hubfs/Asset%2052@4x.png" // Replace with your image URL
          alt="Sample Image"
          className="w-full h-auto md:w-[400px]"
        />
      </div>
    </div>
  )
}

export default ValuedCard
