import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';

const Cart = () => {
  
  const { cartItem ,updatedQuantity,delectItem } = useCart(); // ✅ Now it won’t be undefined
  const {user}=useUser();
  const TotalPrice = cartItem.reduce((total,item)=> total+item.price *82,0)
  
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5'>
      {cartItem.length > 0 ? (
        <div>
          <h1 className='text-2xl font-bold'>my cart ({cartItem.length}) </h1>
          {cartItem.map((item, index) => (
        
            <div key={index} className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full">
              <div className='flex items-center gap-4 '>
             <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md' />
             <div>
              <h1 className='w-[300px] line-clamp-2'>{item.title}</h1>
              <p className='text-red-500 font-semibold text-lg'>₹ {(item.price * 82).toFixed(0)}</p>
             </div>
              </div>
              <div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl '>
            <button onClick={()=>updatedQuantity(cartItem,item.id,"decrease")} className='cursor-pointer'>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>updatedQuantity(cartItem,item.id,"increase")} className='cursor-pointer'>+</button>
              </div>
              <span onClick={()=>delectItem(item.id)} className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl '>
                <FaRegTrashAlt className='text-2xl cursor-pointer text-red-500'/>
              </span>
            </div>
          
          ))}
          <div className='grid grid-cols-2 gap-20'>
            <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
          <h1 className='text-gray-800 font-bold text-xl '>Delivery Info</h1>
          <div className='flex flex-col space-y-1'>
            <label htmlFor="">Full Name</label>
            <input type="text"  placeholder='Enter Your Name' className='p-2 rounded-md' value={user.fullName}/>
          </div> 
          <div className='flex flex-col space-y-1'>
          <label htmlFor="">Address</label>
          <input type="text"  placeholder='Bhithan Motihari' className='p-2 rounded-md' />
          </div>
          <div className='flex w-full gap-5'>
            <div className='flex flex-col space-x-1 w-full '>
            <label htmlFor="">State</label>
            <input type="text"  placeholder='Bihar' className='p-2 rounded-md w-full text-black' />
            </div>
            <div className='flex flex-col space-x-1 w-full '>
            <label htmlFor="">PostCode</label>
            <input type="text"  placeholder='845401' className='p-2 rounded-md w-full text-black' />
            </div>
            </div>
            <div className='flex w-full gap-5'>
            <div className='flex flex-col space-x-1 w-full '>
            <label htmlFor="">Country</label>
            <input type="text"  placeholder='India' className='p-2 rounded-md w-full text-black' />
            </div>
            <div className='flex flex-col space-x-1 w-full '>
            <label htmlFor="">Phone No</label>
            <input type="text"  placeholder='Enter PostCode' className='p-2 rounded-md w-full text-black' />
            </div>
            </div>
            <button className=' bg-red-500 rounded-md mt-5 text-white px-3 py-1 cursor-pointer'>Submit</button>
            <div className='flex items-center justify-center w-full text-gray-700'>---------OR-------------- </div>
            <div className='flex justify-center'>
          <button className='bg-red-500 text-white px-3 py-2 rounded-md  '>Delect Address</button>
            </div>
            </div>
           <div className='bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>
            <h1 className='text-xl font-bold text-gray-800'>Bill Details</h1>
            <div className='flex justify-between items-center'>
              <h1 className='flex items-center gap-1 text-gray-400'> <span> <LuNotebookText/></span>Total Item</h1>
              <p>₹{TotalPrice}</p>
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='flex items-center gap-1 text-gray-400'> <span> <MdDeliveryDining/></span >Delivery charge</h1>
              <p className='text-red-500 font-semibold'> <span className='text-gray-400 line-through pr-1'>₹25</span>Free</p>
            </div>
            <div className='flex justify-between items-center'>
              <h1 className='flex items-center gap-1 text-gray-400'> <span> <GiShoppingBag/></span >Handling charge</h1>
              <p className='text-red-500 font-semibold'>₹5</p>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
              <h1 className='flex items-center gap-1'>Grand Total</h1>
              <p className='text-green-400 font-semibold'>₹{TotalPrice+5}</p>
            </div>
             <div>
              <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply promo code</h1>
              <div className='flex gap-3'>
           <input type="text"  placeholder='Enter Code' className='p-2 rounded-md w-full'/>
          <button className='bg-white border border-gray-200 text-black px-4 cursor-pointer py-1 rounded-md  '>Apply</button>
              </div>
             </div>
             <button className='w-full bg-red-500 px-3 py-2 rounded-md  mt-3 text-white'>proceed to checkout</button>
            </div>
           </div>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  )
}

export default Cart
