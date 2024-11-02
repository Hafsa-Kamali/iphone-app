"use client";
import { useState } from 'react';
import Image from 'next/image';
import Footer from '../Footer';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: "$1437", imageUrl:"/iphone gold.png" },
  { id: 2, name: "Apple iPhone 11 128GB White (MQ233)", price: "$510", imageUrl: "/iphone11.png" },
  { id: 3, name: "Apple iPhone 11 128GB White (MQ233)", price: "$550", imageUrl: "/iphone11.png" },
  { id: 4, name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1499", imageUrl: "/iphone white.png" },
  { id: 5, name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1399", imageUrl: "/iphone gold.png" },
  { id: 6, name: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0Q3)", price: "$1600", imageUrl: "/iphonepurle.png" },
  { id: 7, name: "Apple iPhone 13 mini 128GB Pink (MLK23)", price: "$850", imageUrl: "/iphone13mini.png" },
  { id: 8, name: "Apple iPhone 14 Pro 256GB Black Space (MQOT3)", price: "$1399", imageUrl: "/iphone 14 pro 1(3).png" },
  { id: 9, name: "Apple iPhone 14 Pro 256GB Silver (MQ103)", price: "$1399", imageUrl: "/iphone white.png" },
];

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center space-x-2 mt-4 ml-[30rem]">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-2 py-1 text-gray-600">
        &lt;
      </button>
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 rounded ${currentPage === num ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {num}
        </button>
      ))}
      <span className="text-gray-600">...</span>
      <button
        onClick={() => onPageChange(totalPages)}
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        {totalPages}
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-2 py-1 text-gray-600">
        &gt;
      </button>
    </div>
  );
};

interface FilterBlockProps {
  selectedBrand: string;
  handleBrandChange: (brand: string) => void;
}

const FilterBlock: React.FC<FilterBlockProps> = ({ selectedBrand, handleBrandChange }) => {
  return (
    <div className="w-full lg:w-5/4 border-r pr-4 lg:relative fixed top-4 left-0 h-full bg-white z-50 p-4 lg:p- lg:shadow-none shadow-lg">
      <div className="mb-6">
        <h2 className="text-lg font-bold">Brand</h2>
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-lg p-2 my-2"
        />
        <ul className="space-y-2">
        
          
          <li><label><input type="checkbox" style={{ accentColor: 'black' }} checked={selectedBrand === 'Apple'} onChange={() => handleBrandChange('Apple')} /> Apple <span className="text-gray-500">(110)</span></label></li>
            <li><label><input type="checkbox" style={{ accentColor: 'black' }} checked={selectedBrand === 'Samsung'} onChange={() => handleBrandChange('Samsung')} /> Samsung <span className="text-gray-500">(125)</span></label></li>
            <li><label><input type="checkbox" style={{ accentColor: 'black' }} checked={selectedBrand === 'Xiaomi'} onChange={() => handleBrandChange('Xiaomi')} /> Xiaomi <span className="text-gray-500">(68)</span></label></li>
            <li><label><input type="checkbox"  style={{ accentColor: 'black' }} checked={selectedBrand === 'Poco'} onChange={() => handleBrandChange('Poco')} /> Poco <span className="text-gray-500">(44)</span></label></li>
            <li><label><input type="checkbox" style={{ accentColor: 'black' }}  checked={selectedBrand === 'OPPO'} onChange={() => handleBrandChange('OPPO')} /> OPPO <span className="text-gray-500">(36)</span></label></li>
            <li><label><input type="checkbox"  style={{ accentColor: 'black' }} checked={selectedBrand === 'Honor'} onChange={() => handleBrandChange('Honor')} /> Honor <span className="text-gray-500">(10)</span></label></li>
            <li><label><input type="checkbox"  style={{ accentColor: 'black' }} checked={selectedBrand === 'Motorola'} onChange={() => handleBrandChange('Motorola')} /> Motorola <span className="text-gray-500">(34)</span></label></li>
            <li><label><input type="checkbox" style={{ accentColor: 'black' }}  checked={selectedBrand === 'Nokia'} onChange={() => handleBrandChange('Nokia')} /> Nokia <span className="text-gray-500">(22)</span></label></li>
            <li><label><input type="checkbox"  style={{ accentColor: 'black' }} checked={selectedBrand === 'Realme'} onChange={() => handleBrandChange('Realme')} /> Realme <span className="text-gray-500">(35)</span></label></li>
        
        </ul>
      </div>
      <div className="space-y-4">
      <h2 className="text-lg font-bold">
          <select className=" p-4 rounded-md bg-transparent w-[80%]" aria-label="Sort products">
            <option>Battery Capacity</option>
            <option>iPhone 13 Pro: 2,018 mAh</option>
            <option>iPhone 13 mini: 2,406 mAh</option>
            <option>iPhone 13: 3,227 mAh</option>
            <option>iPhone 13 Pro Max: 4,352 mAh</option>
            <option>iPhone 14 Pro Max: 4,323 mAh</option>
            <option> iPhone 14 Pro: 3,095 mAh</option>
            <option>iPhone 14: 2,988 mAh</option>
            <option>iPhone 14 mini: 2,405 mAh</option>

          </select>
          </h2>
          <h2 className="text-lg font-bold"><select className="border-white p-4 rounded-md bg-transparent w-[80%]" aria-label="Sort products">
            <option>Screen type</option>
            <option>Liquid Retina HD (LCD)</option>
            <option>Super Retina XDR (OLED)</option>
            <option>ProMotion (120Hz OLED)</option>
          </select></h2>
          <h2 className="text-lg font-bold">
          <select className="border-white p-4 rounded-md w-[80%] bg-transparent" aria-label="Sort products">
            <option>Screen Diagonal</option>
            <option>iPhone SE (3rd gen): 4.7 inches</option>
            <option>iPhone 13 mini: 5.4 inches</option>
            <option>iPhone 11, 12, 13, 14: 6.1 inches</option>
            <option>iPhone 13 Pro Max, 14 Pro Max: 6.7 inches</option>
          </select>
          </h2>
          <h2 className="text-lg font-bold">
          <select className="border-white p-4 rounded-md bg-transparent w-[80%]" aria-label="Sort products">
            <option>Protection class</option>
            <option>IP68</option>
            <option>IP67</option>
            <option>IP66</option>
            <option>IP65</option>
            <option>IP64</option>
            <option>IP63</option>
            <option>IP62</option>
            <option>IP61</option>
          </select>
          </h2>
          
          <h2 className="text-lg font-bold">
          <select className="border-white p-4 rounded-md bg-transparent w-[80%]" aria-label="Sort products">
            <option>Built-in memory</option>
            <option>128 GB</option>
            <option>256 GB</option>
            <option>512 GB</option>
            <option>1 TB</option>
            </select>
          </h2>
      </div>
    </div>
  );
};

const Smartphones = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('Apple');
  const [selectedProductsCount] = useState<number>(85);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <main>
      {/* Toggle Filter Button for Mobile */}
      <button className="lg:hidden py-2 px-6 bg-[#f6f6f6] text-black fixed top-0 left-0 z-50 mt-[6.8rem] rounded-md ml-[20rem] " onClick={() => setShowFilter(!showFilter)}>
        {showFilter ? "Close Filters" : "Filters"}
      </button>

      {showFilter && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-40">
          <FilterBlock selectedBrand={selectedBrand} handleBrandChange={handleBrandChange} />
        </div>
      )}

      <div className="flex lg:flex-row w-full px-4 lg:px-16 py-8 h-screen">
        <aside className="hidden lg:block w-1/4">
          <FilterBlock selectedBrand={selectedBrand} handleBrandChange={handleBrandChange} />
        </aside>

        <div className="w-full lg:w-3/4 pl-4">
          <div className="lg:flex lg:justify-between lg:items-center mb-6">
            <h2 className="text-lg lg:flex hidden">Selected Products: {selectedProductsCount}</h2>
            <select className="border rounded-lg p-2 items-end" aria-label="Sort products">
              <option>By rating</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="border p-4 flex flex-col items-center bg-[#f6f6f6] rounded-[9px] w-[100%] lg:h-[500px]">
                <div className="flex justify-center mt-4 md:mt-0 w-[90%]">
                  <Image src={product.imageUrl} alt={product.name} width={100} height={50} className="hover:scale-105 cursor-pointer sm:w-[250px]" />
                </div>
                <p className="font-medium text-black mt-2 lg:mt-2 text-[20px] text-center mx-2">{product.name}</p>
                <p className="text-center mt-[2] lg:mt-2 text-[24px] font-bold tracking-wide">{product.price}</p>
                <button type="button" className="md:px-[68px] md:py-[10px] px-8 py-2 border-2 md:ml-4 border-black bg-black text-white rounded-md mt-2 md:mt-2 hover:scale-105 hover:shadow-[#7c7c7c3e] shadow-lg">
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
      <div className="lg:flex block justify-center items-center lg:mt-[58rem] mt-[1400px]">
        <Footer />
      </div>
    </main>
  );
};

export default Smartphones;
