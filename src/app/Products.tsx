import Image from "next/image";
import Pic1 from "../app/Image/Product Images/Iphone 14 pro (1).png";
import Pic2 from "../app/Image/Product Images/Iphone 14 pro (2).png";
import Pic3 from "../app/Image/Product Images/Iphone 14 pro (3).png";
import Pic4 from "../app/Image/Product Images/Iphone 14 pro (4).png";
import Pic5 from "../app/Image/Product Images/Iphone 14 pro (5).png";
import Pic6 from "../app/Image/Product Images/Iphone 14 pro (6).png";
import Pic7 from "../app/Image/Product Images/Iphone 14 pro (7).png";
import Pic8 from "../app/Image/Product Images/Iphone 14 pro (8).png";

// Example product data array
const products = [
  {
    image: Pic3,
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: "$900",
  },
  {
    image: Pic2,
    title: "Blackmagic Pocket Cinema Camera 6K",
    price: "$2535",
  },
  {
    image: Pic1,
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: "$399",
  },
  {
    image: Pic8,
    title: "AirPods Max Silver Starlight Aluminium",
    price: "$549",
  },
  {
    image: Pic4,
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "$549",
  },
  {
    image: Pic5,
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "$1179",
  },
  {
    image: Pic6,
    title: "Galaxy Buds FE Graphite",
    price: "$99.99",
  },
  {
    image: Pic7,
    title: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver (MK2L3) 2021",
    price: "$398",
  },
];

export default function Products() {
  return (
    <div className="w-[420px] lg:w-[1440px] px-2 lg:px-[160px] py-[56px] items-center justify-center">
      {/* Categories */}
      <div className="lg:w-full w-[90%] flex ml-[6rem] lg:ml-0 text-[#8b8b8b] gap-x-4">
        <p className="text-black font-medium border-b-2 border-black rounded-sm cursor-pointer">
          New Arrival
        </p>
        <p className="font-medium hover:text-black hover:underline hover:underline-offset-4 hover:scale-110 cursor-pointer">
          Best Seller
        </p>
        <p className="font-medium hover:text-black hover:underline hover:underline-offset-4 hover:scale-110 cursor-pointer">
          Featured Products
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-2 lg:gap-4">
        {products.map((product, index) => (
          <div key={index} className="w-[200px] md:w-full h-[400px] lg:h-[450px] gap-4 md:gap-8 px-8 py-6 md:px-4 md:py-6 bg-[#f6f6f6] rounded-[9px] ml-[3rem] lg:ml-[6rem]">
            <div className="flex justify-end">
              {/* Heart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f6f6f6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-stone-400 cursor-pointer hover:fill-red-600 hover:text-red-600 hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>

            {/* Product Image */}
            <div className="flex justify-center mt-4 md:mt-0">
              <Image src={product.image} alt={product.title} className="hover:scale-105 cursor-pointer sm:w-[250px] " />
            </div>

            {/* Product Details */}
            <p className="font-medium text-black mt-2 lg:mt-2 text-[16px] text-center mx-2">{product.title}</p>
            <p className="text-center mt-[2] lg:mt-2 text-[24px] font-bold tracking-wide">{product.price}</p>

            {/* Buy Now Button */}
            <button
              type="button"
              className="md:px-[68px] md:py-[10px] px-8 py-2 border-2 md:ml-4 border-black bg-black text-white rounded-md mt-2 md:mt-2 hover:scale-105 hover:shadow-[#7c7c7c3e] shadow-lg"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
