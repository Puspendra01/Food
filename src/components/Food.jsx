import React from 'react'
import { Link } from 'react-router-dom'

const Food = () => {
  return (
    <>
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
        <a href='/details'>
        <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>       
          <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' className='w-full h-[200px] object-cover rounded-t-lg'/>
          <div className='flex justify-between px-2 pr-4 pt-3 pb-3'>
            <p className='font-bold'>Double Stage Cake</p>
            <p className=''>
              <span className='bg-orange-500 text-white p-1 rounded-full'>$$$$</span>
            </p>
          </div>
        </div></a>
      </div>
    </div>
    </>
  )
}

export default Food