

import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import Link from 'next/link';

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>

      {/* Nav Menu */}

      <nav
       className={`text-white text-xl ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[70%] bg-gray-900 space-y-10 z-[10006]`}
      >
 <div className="flex flex-col space-y-16">
          <Link href="/home"
             className="hover:text-white hover:underline hover:underline-offset-8 hover:scale-110">Home
          </Link>
          <Link href="/about"
             className="hover:text-white hover:underline hover:underline-offset-8 hover:scale-110">About
          </Link>
          <Link href="/contact" className="hover:text-white hover:underline hover:underline-offset-8 hover:scale-110">Contact Us
          </Link>
          <Link href="/blog"className="hover:text-white hover:underline hover:underline-offset-8 hover:scale-110">Blog
          </Link>
        </div>

        {/* Icons */}
        <div className="flex space-x-6 mt-[4rem] text-white">
          <Link href="/favorites"
             className="hover:text-red-600 hover:fill-red-600  hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg"
               fill="" viewBox="0 0 24 24" 
               stroke-width="1.5" 
               stroke="currentColor"
                className="size-6">
  <path stroke-linecap="round"
   stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

            
          </Link>
          <Link href="/cart"
             className="hover:text-white hover:fill-gray-400 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill=""
               viewBox="0 0 24 24" 
               stroke-width="1.5" stroke="currentColor" 
               className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

          </Link>
          <Link href="/profile"
            className="hover:text-white hover:fill-blue-600 hover:scale-110">
             <svg xmlns="http://www.w3.org/2000/svg" 
             fill="" viewBox="0 0 24 24" 
             stroke-width="1.5" stroke="currentColor"
              className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          </Link>
      </div>

               {/* Close Button */}
       
          <XMarkIcon
            onClick={closeNav}
            className="absolute top-[2.2rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white hover:text-stone-500 cursor-pointer"
          />
      

        </nav>
        </div>
  )
}

export default NavMobile