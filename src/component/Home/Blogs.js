import React, { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import in1 from '../asset/interior/in1.jpg';
import in2 from '../asset/interior/in2.jpg';
import in3 from '../asset/interior/in3.jpg';
import in4 from '../asset/interior/in4.jpg';
import in5 from '../asset/interior/in5.jpg';
import in6 from '../asset/interior/in6.jpg';

function Blogs() {
  const [house, setHouse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // Fetch data only when the button is clicked
    fetchData();
    setShowRecommendations(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setShowRecommendations(false);
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/interior');
      const data = await response.json();
      setHouse(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data', err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="container mx-auto p-6">
      <div className="text-center my-8">
  <h1 className="text-4xl font-bold mb-4">See Our Latest House Interior</h1>
  <button
    className="inline-flex items-center bg-blue-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
    onClick={openModal}
  >
    Home for You <IoArrowForwardOutline className="text-blue-900 text-2xl ml-2" />
  </button>
</div>


        {/* Render static images from your assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="mb-4">
            <img src={in1} alt="Interior 1" className="w-full h-auto rounded-md shadow-md" />
          </div>

          <div className="flex flex-col sm:flex-row mb-4">
            <img src={in2} alt="Interior 2" className="w-full h-auto rounded-md shadow-md sm:mr-2" />
            <img src={in3} alt="Interior 3" className="w-full h-auto mt-2 sm:mt-0 rounded-md shadow-md" />
          </div>

          <div className="mb-4">
            <img src={in6} alt="Interior 6" className="w-full h-auto rounded-md shadow-md" />
          </div>

          <div className="flex flex-col sm:flex-row">
            <img src={in5} alt="Interior 5" className="w-full h-auto rounded-md shadow-md sm:mr-2" />
            <img src={in4} alt="Interior 4" className="w-full h-auto mt-2 sm:mt-0 rounded-md shadow-md" />
          </div>
        </div>

        {showRecommendations && (
          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-center">More Inspiring Interiors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {!loading &&
                !error &&
                house.map((image, index) => (
                  <div key={index} className="mb-8">
                    <img
                      src={`http://localhost:4000${image.image}`}
                      alt={`Interior ${index + 1}`}
                      className="w-full h-auto rounded-md shadow-md"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}

        {isModalOpen && (
          <button
            onClick={closeModal}
            className="mt-8 w-40 h-16 bg-red-300 text-2xl font-bold rounded-full shadow-lg hover:text-white hover:bg-gray-900 focus:outline-none"
          >
            Close
          </button>
        )}
      </section>

    </>
  );
}

export default Blogs;
