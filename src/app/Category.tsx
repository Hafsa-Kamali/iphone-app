import Arrows from "../app/Image/Arrows.png";
import Image from "next/image";
import Phones from "../app/Image/Phones.png";
import SmartWatch from "../app/Image/SmartWatch.png";
import Camera from "../app/Image/Cameras.png";
import HeadPhones from "../app/Image/Headphones.png";
import Computer from "../app/Image/Computers.png";
import Gaming from "../app/Image/Gaming.png";

export default function Categories() {
  return (
    <div className="w-full bg-[#fafafa] px-10 py-10 md:px-8 md:py-10 space-y-12 ">
      
      <div className="h-[32px] flex justify-between">
        <div className="text-[28px] md:text-[28px] font-medium tracking-[-.1px] ml-14 md:ml-0">
          Browse by Category
        </div>
        <div>
          <Image className="m-auto hover:scale-110 cursor-pointer hidden md:flex" src={Arrows} alt="Arrows" />
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-6">
        {/* Box 1 */}
        <div className="w-[65%] h-[128px] ml-16 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={Phones} alt="Phones"/>
        </div>
        
        {/* Box 2 */}
        <div className="w-[65%] h-[128px] ml-6 md:ml-10 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={SmartWatch} alt="Smart Watch" />
        </div>
        
        {/* Box 3 */}
        <div className="w-[65%] h-[128px] ml-16 md:ml-6 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={Camera} alt="Camera" />
        </div>
        
        {/* Box 4 */}
        <div className="w-[65%] h-[128px] ml-6 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={HeadPhones} alt="Headphones" />
        </div>
        
        {/* Box 5 */}
        <div className="w-[65%] h-[128px] ml-16 md:ml-6 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={Computer} alt="Computer" />
        </div>
        
        {/* Box 6 */}
        <div className="w-[65%] h-[128px] ml-6 bg-[#fafafa] rounded-[15px] flex items-center justify-center">
          <Image className="hover:scale-110 cursor-pointer" src={Gaming} alt="Gaming" />
        </div>
      </div>
    </div>
  );
}

