import React, { useEffect } from 'react'
import { getData } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import Catogary from './Catogary';



const Carousel = () => {
    

    const {data,fetchAllProduct}=getData();
   useEffect(()=>{
    fetchAllProduct()
   },[])
   
   const SamplePrevArrow = (props)=>{
    const{className,style,onClick} = props;
    return(
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
            
            <AiOutlineLeft className='arrows' style={{...style, display:'block', borderRadius:"50px", background:"#f53347", color:"white",position:"absolute", padding:"2px", left:"50px"}}/>
        </div>
    )
   }


   const SampleNextArrow = (props)=>{
    const{className,style,onClick} = props;
    return(
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}} >

            <AiOutlineRight className='arrows' style={{...style, display:'block', borderRadius:"50px", background:"#f53347", color:"white", position:"absolute", padding:"2px", right:"50px"}} />
        </div>
    )
   }
   
   const settings = {
    dots: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover:false,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow to='next'/>,
    prevArrow: <SamplePrevArrow to='prev'/>,
  };

  return (

    
    <div >
      
      <Slider {...settings}>
      <div className='w-full h-[500px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#47477c] -z-10'>
        <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
        <div className='md:space-y-6 space-y-3'>
        <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
        <h1  className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'> </h1>
        <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>Sony WH-1000XM5 Best Active Noise Cancelling Wireless Bluetooth Over Ear Headphones with Mic for Clear Calling,Battery Life 30 Hours -White</p>
        <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'> Shop Now</button>
        </div>
        <div>
                                    <img src="https://m.media-amazon.com/images/I/61ULAZmt9NL.jpg" alt="" className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400 mb-16 max-w-[400px]'/>
                                </div>
        </div>
        </div>
        {/* 2nd slide */}
        <div className='w-full h-[500px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#47477c] -z-10'>
        <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
        <div className='md:space-y-6 space-y-3'>
        <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
        <h1  className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'> </h1>
        <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI (Titanium Gray, 12GB RAM, 512GB Storage), Titanium Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual Engine and 5000mAh Battery</p>
        <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'> Shop Now</button>
        </div>
        <div>
                                    <img src="https://m.media-amazon.com/images/I/71rs4Aer71L._UF1000,1000_QL80_.jpg" alt="" className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400 mb-16 max-w-[400px]'/>
                                </div>
        </div>
        </div>
        {/* 3nd slide */}
        <div className='w-full h-[500px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#47477c] -z-10'>
        <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
        <div className='md:space-y-6 space-y-3'>
        <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
        <h1  className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'> </h1>
        <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>Apple MacBook Air (13.6 inch, M4, 16GB, 256GB, macOS, Sky Blue)</p>
        <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'> Shop Now</button>
        </div>
        <div>
                                    <img src="https://m.media-amazon.com/images/I/719C6bJv8jL.jpg" alt="" className='rounded-full w-[650px] hover:scale-105 transition-all shadow-2xl shadow-red-400 mb-16 max-w-[400px] h-[390px]'/>
                                </div>
        </div>
        </div>
        {/* 4nd slide */}
        <div className='w-full h-[500px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#47477c] -z-10'>
        <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
        <div className='md:space-y-6 space-y-3'>
        <h3 className='text-red-500 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
        <h1  className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white'> </h1>
        <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>Apple Watch Ultra 2 - 49 mm - titanium - smart watch with Ocean band - fluoroelastomer - orange - wrist size: 5.12 in - 7.87 in - 64 GB - Wi-Fi, LTE, UWB, Bluetooth - 4G - 2.17 oz</p>
        <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2'> Shop Now</button>
        </div>
        <div>
                                    <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/product/1726129797130/zip/img/webp/section13-pic1-mb.jpg.webp" alt="" className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400 mb-16 max-w-[400px] h-[400px]'/>
                                </div>
        </div>
        </div>
      </Slider>
      <Catogary/>
      
    </div>
    
  )
}

export default Carousel