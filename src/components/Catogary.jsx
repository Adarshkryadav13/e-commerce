import React, {useEffect } from 'react'
import { getData } from '../context/DataContext'
import { Link } from 'react-router-dom'

const Catogary = () => {
  

  return (
    <div className='bg-gray-400'>
    <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4 '>
                <button className='uppercase bg-gradient-to-r  to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>All</button>
               <Link to={'/product'}> <button className='uppercase bg-gradient-to-r  to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>product</button></Link>
                <button className='uppercase bg-gradient-to-r  to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>phone</button>
                <button className='uppercase bg-gradient-to-r  to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>Gadget</button>
            </div>
       
    </div>
   
  )
}

export default Catogary