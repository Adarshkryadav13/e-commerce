import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";
import React from 'react'

export const DataContext=createContext(null);

export const DataProvider =({children})=>{
    const [data,setData] = useState()
    //fetching all product from api
    const fetchAllProduct = async ()=>{
        try {
            // const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            console.log(res);
            
            const ProductsData=res.data.products
            setData(ProductsData)
            
           

        } catch (error) {
            console.log(error);
        }
    }
    const getUniqueCategory =(data,property)=>{
        let newVal = data?.map((curElem)=>{
            return curElem[property]
        })
       newVal = ["All",...new Set(newVal)]
        return newVal
    }
    const categoryOnlyData = getUniqueCategory(data, "category")
    const brandOnlyData = getUniqueCategory(data,"brand")

    return <DataContext.Provider value={{data,setData,fetchAllProduct,categoryOnlyData,brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export  const getData = ()=> useContext(DataContext);
