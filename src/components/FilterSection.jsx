import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search,setSearch,brand,priceRange,catagory,setPriceRange,handleCategoryChange,handleBrandChange,setCategory}) => {
  const {categoryOnlyData,brandOnlyData} = getData() 
 
  return (
    <div className='bg-gray-100 rounded-md h-max mt-10 p-4 '>
      <input type="text" 
       placeholder='search..' 
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       className='bg-white border-gray-200 border-2 p-2'/>
      {/* //catagory only data  */}
      <h1 className=' mt-5 font-semibold text-xl'>catagory</h1>
      <div className='flex flex-col gap-2 mt-3'>
      {
        categoryOnlyData?.map((item)=>{
          return <div  className='flex gap-2'>

            <input  type="checkbox"  name={item} checked value={item} onChange={handleCategoryChange} />
            
            <button className='cursor-pointer uppercase '>{item}</button>
          </div>
        })
      }
      </div>
      {/* brand only data */}
      
      <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
      <select name="" id=""  className='bg-white w-full p-2 border-gray-200 border-2 rounded-md'
      value={brand}
      onChange={handleBrandChange}>
        {
          brandOnlyData?.map((item, index)=>{
            return <option key={index} value={item} >
              {item.toUpperCase()}
            </option>
          }
        )}
      </select>
      {/* price range */}
      <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor=""> Price Range:${priceRange[0]} - ${priceRange[1]} </label>
        <input type="range"  min="0" max="5000"name='' id='' value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number
        (e.target.value)])}/>
      </div>
      <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer' onClick={()=>{setSearch(''); setCategory('All'); setPriceRange([0,5000])}}>Reset Filters</button>
    </div>
     
  
  )
}

export default FilterSection


