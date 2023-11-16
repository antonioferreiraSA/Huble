import React from 'react'

const CardOne = () => {
  return (
    <div className="flex p-8">
      {/* Left side */}
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#fc4f5a]">WHO</span> WE ARE
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          To always be a company where employees can thrive and provide lasting
          solutions for our customers, we’re committed to five core values here
          at Huble. Five things that we hold dear, and that guide us in the
          things that we do every day. This short video explains - these are our
          people, they are all our voices, this is who we are.
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
        {/* Embed your video component here */}
        <iframe
          title="Sample Video"
          className="w-full h-64"
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default CardOne