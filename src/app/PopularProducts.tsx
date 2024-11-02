import Image from 'next/image'
import React from 'react'
import Popularproduct from "../app/Image/popularproduct.png"
import IPadPro  from "../app/Image/ipadpro.png"
import SamsungGalaxy  from "../app/Image/samsunggalaxy.png"
import MacbookPro  from "../app/Image/Macbook 1.png"


const PopularProducts = () => {
    
  return (
    <div className='w-[100%] h-[40rem] bg-slate-100 flex lg:flex-row flex-col'>

    <div className='lg:w-[25%] w-full h-[40rem] bg-white'>
    
    <div  className='w-[100%] h-[10rem] '>

<Image 
src={Popularproduct}
alt= "PopularProduct"
width={350}
className='items-center justify-center'
/>
    </div>
   
    <div className='w-[80%] h-[20rem] mx-auto mt-[14rem]' >
<h2  className='text-black text-3xl text-[36px]'>Popular Products</h2>
<p className='text-stone-400 mt-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button 
type='button'
className='px-14 py-4 border-2 border-black rounded-md hover:scale-105 hover:shadow-gray-600 shadow-lg mt-6'
>
    Shop Now
</button>
    </div>
    </div>

     <div className='lg:w-[25%] w-full h-[40rem] bg-[#f9f9f9]'>
     <div  className='w-[100%] h-[10rem] '>

<Image 
src={IPadPro}
alt= "PopularProduct"
width={350}
className='items-center justify-center'
/>
    </div>
   
    <div className='w-[80%] h-[20rem] mx-auto mt-[14rem]' >
<h2  className='text-black text-3xl text-[36px]'>IPad Pro</h2>
<p className='text-stone-400 mt-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button 
type='button'
className='px-14 py-4 border-2 border-black rounded-md hover:scale-105 hover:shadow-gray-600 shadow-lg mt-6'
>
    Shop Now
</button>
    </div>
     </div>

<div className='w-[100%] lg:w-[25%] h-[40rem] bg-[#EAEAEA]'>
<div  className='w-[100%] h-[10rem] '>

<Image 
src={SamsungGalaxy}
alt= "PopularProduct"
width={350}
className='items-center justify-center'
/>
    </div>
   
    <div className='w-[80%] h-[20rem] mx-auto mt-[14rem]' >
<h2  className='text-black text-3xl text-[36px]'>Samsung Galaxy</h2>
<p className='text-stone-400 mt-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button 
type='button'
className='px-14 py-4 border-2 border-black rounded-md hover:scale-105 hover:shadow-gray-600 shadow-lg mt-6'
>
    Shop Now
</button>
    </div>
</div>

<div className='w-[100%] lg:w-[25%] h-[40rem] bg-[#2C2C2C]'>
<div  className='w-[100%] h-[10rem] '>

<Image 
src={MacbookPro}
alt= "PopularProduct"
width={350}
className='items-center justify-center'
/>
    </div>
   
    <div className='w-[80%] h-[20rem] mx-auto mt-[14rem]' >
<h2  className='text-white text-3xl text-[36px] font-thin'>Macbook Pro</h2>
<p className='text-stone-300 mt-4'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
<button 
type='button'
className='px-14 py-4 border-2 border-white rounded-md hover:scale-105 hover:shadow-gray-300 shadow-lg mt-6 text-white'
>
    Shop Now
</button>
    </div>

</div>
    </div>
  )
}

export default PopularProducts
