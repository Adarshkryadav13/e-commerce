import React, { useState } from 'react'
import FilterSection from '../components/FilterSection';
import Loader from '../assets/loader.webm'
import ProductCart from '../components/ProductCart';


const Products = () => {
  // Instead of fetching, add your products manually
  const [data] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro",
      category: "Mobile",
      brand: "Apple",
      price: 1200,
      image: "https://m.media-amazon.com/images/I/81SigpJN1KL._UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      category: "Mobile",
      brand: "Samsung",
      price: 1000,
      image: "https://www.myg.in/images/thumbnails/300/300/detailed/74/1_koh3-3z-removebg-preview.png.png"
    },
    {
      id: 3,
      title: "Sony WH-1000XM5",
      category: "Electronics",
      brand: "Sony",
      price: 350,
      image: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813"
    },
    {
      id: 4,
      title: "Nike Air Max Shoes",
      category: "Fashion",
      brand: "Nike",
      price: 200,
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9e7c969b-a36f-4d25-ae53-80ca724ea237/NIKE+AIR+MAX+SYSTM.png"
    },
    {
      id: 3,
      title: "Sony Headphones WH-1000XM5",
      category: "Electronics",
      brand: "Sony",
      price: 350,
      image: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813"
    },
    {
      id: 3,
      title: "Sony Headphones WH-1000XM5",
      category: "Electronics",
      brand: "Sony",
      price: 350,
      image: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813"
    },
    {
      id: 3,
      title: "Sony Headphones WH-1000XM5",
      category: "Electronics",
      brand: "Sony",
      price: 350,
      image: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813"
    },
     {
      id: 3,
      title: "Sony Headphones WH-1000XM5",
      category: "Electronics",
      brand: "Sony",
      price: 350,
      image: "https://shopatsc.com/cdn/shop/products/2500x2500_Black_5.jpg?v=1694415813"
    }
  ])
  const [cart, setCart] = useState([]);

  // 🛒 Add to cart function
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const [search,setSearch] = useState("")
  const [category,setCategory]=useState("All")
  const [brand,setBrand] = useState("All")
  const [priceRange,setPriceRange] = useState([0,5000])
  const [page,setPage] = useState(1)

  const handleCategoryChange = (e)=>{
    setCategory(e.target.value)
    setPage(1)
  }

  const handleBrandChange = (e)=>{
    setBrand(e.target.value)
    setPage(1)
  }


  return (
    <div className='max-w-6xl mx-auto px-4 mb-10'>

      {data?.length > 0 ?(
        <div className='flex gap-8 '>
          <FilterSection 
            search={search} setSearch={setSearch} 
            brand={brand} setBrand={setBrand} 
            priceRange={priceRange} setPriceRange={setPriceRange} 
            category={category} setCategory={setCategory} 
            handleBrandChange={handleBrandChange} 
            handleCategoryChange={handleCategoryChange} 
          />
          
          {
          <ProductCart products={data} addToCart={addToCart} />
          }
          
        </div>
      ):( <div className='flex items-center justify-center h-[400px]'>
        <video  muted autoPlay loop> 
          <source src={Loader} type='video/webm'/>
        </video>
      </div>)}

    </div>
  )
}

export default Products
