import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[615px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[615px] bg-black/40 flex flex-col justify-center '>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-orange-400 to-red-300 text-transparent bg-clip-text'>The <span >Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-red-400 to-orange-300 text-transparent bg-clip-text'>Food <span>Delivered</span></h1>
            </div>
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full max-h-[615px] object-cover' alt="/" />
        </div>
    </div>
  )
}

export default Hero