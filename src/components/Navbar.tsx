
"use client"


import React, { useEffect, useState  } from 'react';
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";



import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  const [navSticky, setNavSticky]= useState(false);

  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } 
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  } , []);

 const stickyStyle = navSticky ? "md:hidden hidden md:flex flex-row shadow-gray-100 shadow-sm" : "";
  return (
    <nav className="bg-white shadow-sm">
      <div className={`container mx-auto ${stickyStyle} px-8 py-6 flex items-center justify-between z-[50]`}>
        {/* Logo */}
        <div className="text-2xl font-bold font-sans">
          <Link href="/" className="text-black">cyber
          </Link>
        </div>
        
        {/* Search bar */}
        <div className="flex-1 mx-10">
  <div className="relative w-[100%]">
    <input
      type="text"
      placeholder="Search"
      className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 pl-10"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" 
          stroke="currentColor"
           className="size-6 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    </div>
  </div>
</div>


        {/* Navigation Links */}
        <div className="hidden md:flex mr-[8rem] space-x-8 gap-[4rem] text-gray-700 text-[20px]">
          <Link href="/home"
             className="hover:text-black hover:underline hover:underline-offset-4 hover:scale-110">Home
          </Link>
          <Link href="/about"
             className="hover:text-black hover:underline hover:underline-offset-4 hover:scale-110">About
          </Link>
          <Link href="/contact" className="hover:text-black hover:underline hover:underline-offset-4 hover:scale-110">Contact Us
          </Link>
          <Link href="/blog"className="hover:text-black hover:underline hover:underline-offset-4 hover:scale-110">Blog
          </Link>
        </div>

        {/* Icons */}
        <div className="md:flex space-x-6 mr-[2rem] text-gray-700 hidden text-[20px] ">
          <Link href="/favorites"
             className="hover:text-red-600 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24" 
               stroke-width="1.5" 
               stroke="currentColor"
                className="size-6">
  <path stroke-linecap="round"
   stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

            
          </Link>
          <Link href="/cart"
             className="hover:text-gray-600 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none"
               viewBox="0 0 24 24" 
               stroke-width="1.5" stroke="currentColor" 
               className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          </Link>
          <Link href="/profile"
            className="hover:text-black hover:scale-110">
             <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" viewBox="0 0 24 24" 
             stroke-width="1.5" stroke="currentColor"
              className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          </Link>
        
        </div>
        <Bars3CenterLeftIcon
            onClick={openNav}
            className="w-8 h-8 ml-auto absolute top-4 right-3 text-black md:hidden cursor-pointer"
          />
      </div>

    </nav>
  );
};
export default Navbar;
