import Image from 'next/image';
import React from 'react';
import Banner2 from '../app/Image/Banner 2.png';
import BannerMobile from '../app/Image/Banner 2(1).png';
import Link from 'next/link';
const Banner = () => {
  return (
    <div>
        <div className="h-[30rem] w-[100%] hidden lg:flex items-center justify-center">
      <Image src={Banner2} alt="Banner" 
      width={4000} className='bg-cover'/>
      </div>
      <div className="h-[55rem] w-[100%] lg:hidden ">
      <Image src={BannerMobile} alt="Banner" 
      width={500} className='bg-cover'/>
      </div>
      {/* Center Content */}
      <div className="relative z-50 text-center text-white px-4 md:mt-[-20rem] mt-[-44rem]">
        <h1 className="text-6xl md:text-4xl lg:text-7xl font-thin mb-[2rem] md:mb-0">
          Big Summer <span className="font-semibold">Sale</span>
        </h1>
        <p className="md:mt-4 mt-10 text-lg md:text-base lg:text-lg text-stone-400 mb-[8rem] md:mb-0">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="md:mt-8 px-20 py-6 mt-2 border-2 border-white text-lg text-white rounded-md hover:bg-white hover:text-black transition duration-300">
          <Link  href="/SmartPhones">

          Shop Now
          </Link>
        </button>
      </div>
      </div>


  );
};

export default Banner;
