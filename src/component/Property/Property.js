import React, { useState, useEffect } from 'react';
// import getStripe from '../lib/getStripe'
import StripeCheckout from 'react-stripe-checkout';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { IoBedOutline } from 'react-icons/io5';
import { MdLocationOn, MdStarRate, MdBedroomBaby } from 'react-icons/md';
import Newsletter from '../Home/Newsletter';

function Property() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);  // State to control CheckoutForm visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://real-estate-backend-sfgx.onrender.com/recomhouse');
        const data = await response.json();
        setHouses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setShowRecommendations(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setShowRecommendations(false);
    setIsModalOpen(false);
  };


  const onToken = (token) =>{
        console.log(token)
      }

      // const handleCheckout = ()=>{
      //   setIsCheckoutOpen(true)
      // }
  
  return (
    <>
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto flex justify-around items-center">
        <h1 className="text-black text-2xl font-bold">Best Home Recommendation</h1>
        <button
          className="flex bg-blue-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={openModal}
        >
         home for you <IoArrowForwardOutline className="text-blue-900 text-[2rem] w-[4rem] ml-2" />
        </button>
      </div>

      {showRecommendations && (
        <div className='mt-8'>
          <h2 className="text-2xl font-bold mt-4 mb-2">Recommended Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && (
              <div className="text-center text-gray-600">
                <p>Loading...</p>
                {/* You can add a spinner or loading animation here if desired */}
              </div>
            )}
            {error && (
              <div className="text-center text-red-600">
                <p>{error}</p>
                {/* You can add additional error information or suggestions here */}
              </div>
            )}
            {!loading &&
              !error &&
              houses.map((house, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={`https://real-estate-backend-sfgx.onrender.com${house.image}`}
                    alt={`House ${index + 1}`}
                    className="w-full h-48 object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={openModal}
                  />
                  <div className="p-4">
                    <p className="flex items-center ml-[1.5rem]">
                      <MdLocationOn className="mr-2 text-blue-700 font-bold" /> {house.location}
                    </p>
                   <div className='flex justify-around'>
                   <p className="flex items-center">
                      <IoBedOutline className="mr-2 text-blue-700" /> {house.bed}
                    </p>
                    <p className="flex items-center">
                      <MdStarRate className="mr-2 text-blue-700" /> {house.rating}
                    </p>
                    <p className="flex items-center">
                      <MdBedroomBaby className="mr-2 text-blue-700" /> {house.room}
                    </p>
                   </div>
                    <div className="flex justify-between items-center mt-4">
                      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none" onClick={handleCheckout}>
                        Book Now
                      </button> */}

                      <StripeCheckout
        token={onToken}
        name = 'your id is secured with us'
        currency = 'USD'
        amount = '520000000'
        stripeKey="pk_test_51OV57wEBNgJu6mEq7e9JeL56gzbl5xeE9wgrACgHWKTFklbDrTnxNNj96sxZ1DLEAUPRIjRMqZ3ktKpt3Rp3Yu3N00mCTZH68C"
      />
                      <span className="text-black-700 font-bold">$ 5,200,000</span>
                    </div>
                  </div>
            </div>
              ))}
          </div>

          {isModalOpen &&(
            <button onClick={closeModal} className='mt-5 w-[10rem] h-[4rem] bg-red-300 text-1xl font-bold ml-[38rem] rounded-full shadow-lg hover:text-white capitalize hover:bg-gray-900 focus:outline-none'>Close</button>
          )}
        </div>
      )}
    </section>

    <Newsletter />
    </>
  );
}

export default Property;
