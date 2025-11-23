import React from 'react'

const Home = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-[#0f0f0f] flex items-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-row items-start gap-6">

        {/* left dot-line */}
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="w-5 h-5 rounded-full bg-purple-600"></div>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-600 to-transparent"></div>
        </div>

        {/* text */}
        <div className='mt-30'>
          <h1 className="text-5xl sm:text-7xl font-bold text-white">
            Hi, I'm <span className="text-purple-600">Anjana Sasi</span>
          </h1>
          <p className="mt-4 text-4xl text-gray-300">
            Web Developer building modern and responsive web experiences.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Home
