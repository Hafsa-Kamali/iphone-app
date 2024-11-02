
    import Image from "next/image";
    import Pic1 from "../app/Image/Product Images/Iphone 14 pro (1).png";
    import Pic8 from "../app/Image/Iphone 14 pro 1.png";
    import Pic3 from "../app/Image/Iphone 14 pro 1(8).png";
   
    import Pic5 from "../app/Image/Iphone 14 pro 1(12).png";
    const products = [
      {
        image: Pic3,
        title: "Apple iPhone 14 Pro Max 512GB Gold (MQ233)",
        price: "$1437",
      },
      
      
      {
        image: Pic8,
        title: "AirPods Max Silver Starlight Aluminium",
        price: "$549",
      },
      {
        image: Pic1,
        title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
        price: "$399",
      },
      {
        image: Pic5,
        title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3) ",
        price: "$1499",
      },
    ];
    
    export default function DiscountProducts() {
      return (
        <div className="w-[500px] lg:w-[1440px] px-4 lg:px-[160px] py-[56px] items-center justify-center mt-[120rem] md:mt-0">
            <div>
                <h2 className="text-4xl items-center justify-center ml-[2rem] lg:ml-[0rem]">Discounts up to -50%</h2>
            </div>
        
          <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="w-[230px] md:w-full h-[432px] gap-x-4 md:gap-0 px-8 py-6 md:px-4 md:py-6 bg-[#f6f6f6] rounded-[9px] md:ml-[6rem]">
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
    
                <div className="flex justify-center mt-4">
                  <Image src={product.image} alt={product.title} className="hover:scale-105 cursor-pointer" />
                </div>
    
              
                <p className="font-medium text-black mt-4 text-[16px] text-center mx-2">{product.title}</p>
                <p className="text-center mt-2 text-[24px] font-bold tracking-wide">{product.price}</p>
    
               
                <button
                  type="button"
                  className="md:px-[68px] md:py-[10px] px-10 py-2 border-2 md:ml-4 border-black bg-black text-white rounded-md mt-4 md:mt-4 hover:scale-105 hover:shadow-[#7c7c7c3e] shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }



