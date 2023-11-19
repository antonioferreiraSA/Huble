import React from 'react'

const WhoWeAreCard = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 transition-transform duration-500 ease-in-out transform -translate-y-0 hover:-translate-y-2">
      {/* Left side */}
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#fc4f5a]">WHO</span> WE ARE
        </h1>
        <h2
          style={{ fontFamily: 'proxima_nova, sans-serif' }}
          className="text-xl text-gray-600 mb-4"
        >
          To always be a company where employees can thrive and provide lasting
          solutions for our customers, we’re committed to five core values here
          at Huble. Five things that we hold dear, and that guide us in the
          things that we do every day. This short video explains - these are our
          people, they are all our voices, this is who we are.
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
      <div className="md:w-1/2 ">
        {/* Embed your video component here */}
        <div className="aspect-w-16 aspect-h-9 max-w-full mx-auto  ">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/NRPekuPcLic?si=YWm7AGiod-tA10LG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAreCard
