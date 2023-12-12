import React from 'react';

const FoodDetails = () => {
  return (
    <div className=' grid grid-cols-2 '>
    <div className="bg-white p-4 shadow-md rounded-md">
      <img
        src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' height="800"
        // {product.image}
        alt="/"
        // {product.name}
        className="mb-4 rounded-md w-full h-48 object-cover"
      />
</div>
<div>
      <h2 className="text-2xl font-bold mb-2">name</h2>
      <p className="text-gray-600 mb-4">description</p>

      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold text-green-700">$
        {/* {product.price.toFixed(2)} */}
        price</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add to Cart
        </button>
      </div>

      <p className="text-gray-700">
        {/* {product.ingredients} */}
        ingredients</p>
    </div>
    </div>
  );
};

export default FoodDetails;
