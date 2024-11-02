import React from "react";
import Image from "next/image";
import PlayStationImage from "../app/Image/PlayStation.png";
import Airpod1 from "../app/Image/halfearphone.png";
import Airpod2 from "../app/Image/image 36.png";
import MacBook from "../app/Image/MacBook Pro 14.png";
import PlayStationMobile from "../app/Image/PlayStation (2).png";
import AirpodMobile from "../app/Image/Iphone 14 pro 1.png";
import VisionPro from "../app/Image/image 36 (2).png"
import MacBookMobile from "../app/Image/Macbook 1.png"
const SmallerBanners: React.FC = () => {
  return (
    <div className="w-full h-auto lg:h-[600px] bg-green-300 flex flex-col lg:flex-row">
      {/* Left Section (PlayStation and Airpods) */}
      <div className="w-full lg:w-[720px] flex flex-col">
        {/* PlayStation Box */}
        <div className="w-full h-auto lg:h-[328px] bg-white overflow-hidden flex flex-col lg:flex-row items-center">
          <Image
            className="w-[100%] lg:w-[380px] h-auto mx-auto hidden lg:flex"
            src={PlayStationImage}
            alt="PlayStation"
          />
          <Image
            className="h-[15rem] w-[15rem] lg:hidden  mx-auto"
            src={PlayStationMobile}
            alt="PlayStation"
          />
          <div className="p-4 w-full lg:w-[338px] grid text-center lg:text-left">
            <p className="text-[45px] lg:text-[45px] lg:font-bold font-normal">PlayStation5</p>
            <p className="text-[18px] lg:text-[16px] text-[#909090] sm:w-[85%] lg:w-full">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
              redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* AirPods Boxes */}
        <div className="w-full lg:h-[272px] flex flex-col lg:flex-row">
          {/* Airpod 1 */}
          <div className="w-full lg:w-[360px] h-auto bg-[#EDEDED] flex flex-col lg:flex-row items-center">
            <Image
              className="lg:w-[10rem] mx-auto hidden lg:flex lg:ml-4"
              src={Airpod1}
              alt="Airpod 1"
            />
             
             <Image
              className=" h-[15rem] w-[15rem] lg:hidden  mx-auto"
              src={AirpodMobile}
              alt="Airpod 1"
            />
            <div className="p-4 grid text-center lg:text-left">
              <p className="text-[38px] lg:text-[38px] font-light">
                Apple AirPods <span className="font-bold">Max</span>
              </p>
              <p className="text-[18px] lg:text-[18px] text-[#909090] font-medium">
                Computational audio. Listen, it&apos;s powerful.
              </p>
            </div>
          </div>

          {/* Airpod 2 */}
          <div className="w-full lg:w-[360px] h-auto bg-[#353535] flex flex-col lg:flex-row items-center">
            <Image
              className="lg:w-full mx-auto hidden lg:flex"
              src={Airpod2}
              alt="Airpod 2"
            />

<Image
              className=" h-[15rem] w-[15rem] lg:hidden  mx-auto"
              src={VisionPro}
              alt="Airpod 2"
            />
            <div className="p-4 grid text-center lg:text-left">
              <p className="text-[39px] lg:text-[29px] font-light text-white">
                Apple Vision <span className="font-bold">Pro</span>
              </p>
              <p className="text-[18px] lg:text-[14px] text-[#909090] font-medium">
                An immersive way to experience entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Macbook) */}
      <div className="w-full lg:w-full h-auto bg-[#EDEDED] py-8 lg:flex lg:items-center lg:justify-between">
      <Image
          className="h-[30rem] w-[30rem] lg:hidden  mx-auto"
          src={MacBookMobile}
          alt="Macbook"
        />
        <div className="pl-4 pr-2 lg:pl-8 lg:pr-4 text-center lg:text-left ">
          <p className="text-[75px] lg:text-[64px] font-thin leading-none">
            Macbook
          </p>
          <p className="text-[60px] lg:text-[64px] font-bold leading-none">
            Air
          </p>
          <p className="text-[20px] lg:text-[14px] font-medium text-[#909090] mb-4">
            The new 15‑inch MacBook Air makes room for more of what you love with a
            spacious Liquid Retina display.
          </p>
          <button className="border-2 border-black w-[85%] lg:w-[50%] h-[56px] px-6 lg:px-14 py-2 rounded-md hover:shadow-lg hover:scale-105 hover:shadow-black">
            Shop Now
          </button>
        </div>
        <Image
          className="w-[80%] lg:w-[292px] h-auto mx-auto lg:m-0 lg:mr-2 hidden lg:flex"
          src={MacBook}
          alt="Macbook"
        />
      </div>
    </div>
  );
};

export default SmallerBanners;
