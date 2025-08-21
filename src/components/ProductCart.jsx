import React from 'react'
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { IoCartOutline } from 'react-icons/io5';


const ProductCart = ({ products = [],}) => {
  const {addToCart,cartItem} = useCart()
 console.log(cartItem)

  
  return (
    <div className="grid grid-cols-4 gap-7 mt-10">
      {products.map((product, index) => (
        <div key={index} className="border border-gray-200 rounded-2xl p-2 hover:shadow-xl transition-all w-52 mb-16 ">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
          <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="font-bold text-green-600">₹ {(product.price * 82).toFixed(0)}</p>
          
          <button  onClick={() => addToCart(product)}
          className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer flex '> <IoCartOutline className='w-6 h-6 '/>Add to cart</button>
          
        </div>
      ))}
    </div>
  )
}

export default ProductCart
