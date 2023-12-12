import React from 'react';

const Cart = (
  { cartItems, removeFromCart }
  ) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* {cartItems.length === 0 ? ( */}
        <p>Your cart is empty.</p>
      {/* ) : ( */}
        <div>
          {/* {cartItems.map((item, index) => ( */}
            <div 
            // key={index}
             className="flex items-center justify-between border-b py-2">
              <div className="flex items-center">
                <img src='https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'
                  // src={item.image}
                  // alt={item.name}
                  className="w-12 h-12 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="font-bold">
                    {/* {item.name} */}
                    </p>
                  <p className="text-gray-600">
                    {/* {item.description} */}
                    </p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700">$
                {/* {item.price.toFixed(2)} */}
                </p>
                <button
                  // onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          {/* ))} */}

          <div className="mt-4">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-2xl text-green-700 font-bold">
              $
              {/* {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)} */}
            </p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
            Checkout
          </button>
        </div>
      {/* )} */}
    </div>
  );
};

export default Cart;
