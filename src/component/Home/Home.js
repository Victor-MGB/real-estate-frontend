// Home.js

import React,{useState,useEffect} from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { AiFillInsurance } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { GiPoland } from "react-icons/gi";
import axios from 'axios'

import ImageSlider from './ImageSlider';
import slider1 from '../asset/slider1.jpg';
import slider2 from '../asset/slider2.jpg';
import slider3 from '../asset/slider3.jpg';
import slider4 from '../asset/slider4.jpg';
import OurServices from './OurServices';

function Home({props}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const images = [slider1, slider2, slider3, slider4];
  const dreamHome = [
    {
      dreamHead: 'Dream Home, A Haven of Comfort and Joy',
      dreamPara: `In our dream home, light-filled spaces and open designs create a haven where daily life transforms into cherished memories. 
      The heart of the household, our kitchen, beckons culinary dreams, while bedrooms offer serene retreats. 
      Outside, a landscaped garden and welcoming porch set the stage for shared moments.
      
      Our dream home is more than architecture; it's a living canvas reflecting life's journey.
      It adapts, grows, and becomes the backdrop to a tapestry of experiences. A sanctuary where dreams unfold
      and every corner resonates with the beauty of a life well-lived. Welcome to our dream home – where comfort meets joy, and aspirations become reality.`,
    },
  ];

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.get(`/api/properties?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching properties:', error);
      setError('Error searching properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <ImageSlider images={images}  className='relative'/>

      <div className='absolute top-[10rem] ml-[13rem] w-[55rem]'>
        <h1 className='text-white font-bold text-[2.3rem]'>{dreamHome[0].dreamHead}</h1>
        <p className='text-white mt-[1rem] font-bold'>{dreamHome[0].dreamPara}</p>

        <div className="flex items-center justify-between p-4 bg-gray-200 mt-[2rem]">
  <div className="space-x-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Rent</button>
    <button className="bg-green-500 text-white px-4 py-2 rounded">Sell</button>
  </div>

  <div className="flex items-center space-x-4">
    <p className="flex items-center text-[1rem] text-black">
      Property Types <RiArrowDropDownLine className="ml-1 text-[2rem] mt-[0.2rem] font-bold" />
    </p>

    <div className="flex items-center relative border rounded">
  <input
          type="text"
          placeholder="PROPERTY LOCATION OR PROPERTY ID"
          className="p-2 pl-8 outline-none w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
</div>

 {/* Display loading indicator */}

  {/* Display error message */}
  {/* {error && <p className="text-red-500">{error}</p>} */}

  {/* Display search results */}
  <div>
        
      </div>

    <button className="bg-blue-500 text-white px-4 py-2 rounded"  onClick={handleSearch}
> <IoMdSearch />
</button>
  </div>
</div>


<div className="flex items-center space-x-4 mt-[2rem] ml-[1rem]">
  <label className="flex items-center space-x-2">
  <input
  type="checkbox"
  className="form-checkbox text-blue-500 h-4 w-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
    <span className="text-gray-700 text-white">Only property in exclusive representation</span>
  </label>

  <label className="flex items-center space-x-2 ">
  <input
  type="checkbox"
  className="form-checkbox text-blue-500 h-4 w-4 border ml-[2rem] border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
    <span className="text-gray-700 text-white">Only new developments</span>
  </label>
</div>

{searchResults.map((property) => (
          <div key={property._id}>
            {/* Display property details here */}
            <p>{property.location}</p>
            {/* Other property details */}
          </div>
        ))}

 {loading && <p className='text-white text-center font-semibold capitalize mt-3'>Loading...</p>}

{error && <p className="text-red-500 bg-white h-[3rem] mt-5 text-center font-bold capitalize rounded-lg z-50">{error}</p>}


<div className='flex justify-around item-center mt-[4rem]'>


<div className='bg-white rounded-lg w-[12rem] h-[6rem] shadow-lg'>
      <div className='rounded-full border-blue-500 mt-2 ml-2 w-[2rem] h-[2rem] flex items-center justify-center'>
        <IoHome className='text-blue-700 text-[1.5rem]' />
      </div>

      <p className='ml-4 mt-2 text-gray-800 font-bold'>Home Inspections</p>

      <div className='h-0.5 w-[5rem] ml-[6rem] bg-blue-500 mt-4'></div>
    </div>

        <div className='bg-white rounded-lg w-[12rem] h-[6rem] shadow-lg'>
        <div className='rounded-full border-blue-500 mt-2 ml-2 w-[2rem] h-[2rem] flex items-center justify-center'>
        <AiFillInsurance className='text-blue-700 text-[1.5rem]'/>
            </div>

            <p  className='ml-4 mt-2 text-gray-800 font-bold'>Property Insurance</p>
            <div className='h-0.5 w-[5rem] ml-[6rem] bg-blue-500 mt-4'></div>
        </div>

        <div className='bg-white rounded-lg w-[12rem] h-[6rem] shadow-lg'>
        <div className='rounded-full border-blue-500 mt-2 ml-2 w-[2rem] h-[2rem] flex items-center justify-center'>
        <FaLocationDot className='text-blue-700 text-[1.5rem]'/>
            </div>

            <p className='ml-4 mt-2 text-gray-800 font-bold'>Best Location</p>
            <div className='h-0.5 w-[5rem] ml-[6rem] bg-blue-500 mt-4'></div>
        </div>

        <div className='bg-white rounded-lg w-[12rem] h-[6rem] shadow-lg'>
        <div className='rounded-full border-blue-500 mt-2 ml-2 w-[2rem] h-[2rem] flex items-center justify-center'>
        <GiPoland  className='text-blue-700 text-[1.5rem]'/>
            </div>

            <p className='ml-4 mt-2 text-gray-800 font-bold'>Lots and Land</p>
            <div className='h-0.5 w-[5rem] ml-[6rem] bg-blue-500 mt-4'></div>
        </div>


      </div>

      </div>

<OurServices />
    


    </>
  );
}

export default Home;
