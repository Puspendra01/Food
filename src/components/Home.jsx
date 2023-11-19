import React from 'react'

const Home = () => {
  return (
    <>
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

            {/* HeadlineCards */}
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
            {/* Card */}
            <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
            {/* Card */}
            <div className='rounded-xl relative '>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
    </div>

    {/* Food */}
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Cake</button>
          
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390] w-full items-center'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
          </div>
        </div>
      </div>
      {/* Display Food */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home