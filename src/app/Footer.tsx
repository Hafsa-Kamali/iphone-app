import Image from 'next/image';
import Logo from '../app/Image/Logo.png';
import FBLogo from '../app/Image/Facebook.png';
import Twitter from '../app/Image/Twitter.png';
import Tiktok from '../app/Image/Tiktok.png';
import Insta from '../app/Image/Instagram.png';

export default function Footer() {
  return (
    <div className="w-full bg-black px-4 py-10 md:px-10 lg:px-[160px] lg:py-[104px] grid mt-[3rem]">
      <div className="max-w-[1120px] mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-0">
        <div className="w-full lg:w-[384px] text-center lg:text-left">
          <Image src={Logo} alt="Logo" className="mx-auto lg:mx-0" />
          <p className="ml-4 md:ml-0 text-[12px] lg:text-[14px] font-medium mt-6 text-[#cfcfcf]">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        <div className="lg:ml-[115px] gap-y-4 grid text-center lg:text-left">
          <p className="text-[16px] font-semibold text-white">Services</p>
          <ul className="gap-y-4 grid text-[#cfcfcf] text-[14px]">
            <li>Bonus Program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="lg:ml-[205px] gap-y-4 grid text-center lg:text-left">
          <p className="text-[16px] font-semibold text-white">Assistance to the buyer</p>
          <ul className="gap-y-4 grid text-[#cfcfcf] text-[14px]">
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start mt-8 space-x-4 lg:ml-[6rem]">
        <Image src={FBLogo} alt="Facebook" width={24} height={24} />
        <Image src={Twitter} alt="Twitter" width={24} height={24} />
        <Image src={Tiktok} alt="Tiktok" width={24} height={24} />
        <Image src={Insta} alt="Instagram" width={24} height={24} />
      </div>
    </div>
  );
}
