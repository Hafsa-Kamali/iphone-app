
import Image from 'next/image'
import React from 'react'
import iPhoneImage from "../app/Image/Iphone Image.png"
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="w-full md:w-full h-full md:h-[632px] bg-gray-900 text-white flex flex-col md:flex-row md:items-center">
    <div className="flex flex-col justify-between items-center mt-[6rem] md:mt-0 px-6 py-8 md:px-12 md:py-20">
      <div className="max-w-lg font-sans text-center md:text-left">
        <h3 className="text-[32px] text-stone-500 mb-2 font-semibold">Pro.Beyond.</h3>
        <h1 className="text-[85px] font-thin mb-4 leading-none text-white">
          IPhone 14
          <span className="block md:inline text-white font-semibold md:ml-4 mt-[0.2rem] md:mt-0">
            Pro
          </span>
        </h1>
        <p className="text-lg text-stone-500 mb-6">
          Created to change everything for the better. For everyone.
        </p>
        <button
          type="button"
          className="border border-white text-white px-10 py-3 rounded-md font-semibold hover:bg-gray-700 hover:scale-110 hover:shadow-white shadow-md">
          <Link  href="/SmartPhones">

          Shop Now
          </Link>
        </button>
      </div>
    </div>
  
    <div className="relative flex justify-center md:ml-[22rem] mt-8 md:mt-0">
      <Image
        src={iPhoneImage}
        alt="iPhone 14 Pro"
        width={406}
        height={632}
        className="w-[85%] md:w-[100%] h-[632px]"
      />
    </div>
  </section>
  
  )
}
export default Banner;
