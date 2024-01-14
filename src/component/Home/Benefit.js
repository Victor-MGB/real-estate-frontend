import React from 'react';
import { MdStarRate } from 'react-icons/md';
import video1 from '../video/video1.mp4';
import Customer from './Customer';

function Benefit() {
  return (
    <>
      <section className="bg-gray-100 p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold mb-2">Benefit</h3>
            <h1 className="text-4xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-gray-700 w-[50rem]">
              Trust our seasoned professionals for a stress-free home-buying journey. We're with you every step, ensuring expertise and guidance.
              Explore a range of homes tailored to your lifestyle and budget, from cozy family houses to luxurious estates.
              We're committed to transparency, integrity, and honest communication. Your trust is our priority.
              Your journey is unique. Receive personalized attention as we work to find your dream home.
              Embrace efficiency with our user-friendly online tools, virtual tours, and cutting-edge tech for an informed experience.
              Benefit from our local market knowledge coupled with a global perspective, whether you're moving locally or internationally.
              Our commitment extends beyond closing. Get dedicated support as you settle into your new home.
              Choose <i className="font-bold">Vimo_Soundz-Housing</i> for a seamless journey to your dream home.
            </p>

            <div className="mt-4 md:ml-[4rem]">
              <p className="flex items-center mt-4">
                <MdStarRate className="text-blue-500 mr-2  font-bold text-2xl" /> Trusted Developers
              </p>
              <p className="flex items-center mt-4">
                <MdStarRate className="text-blue-500 mr-2 font-bold text-2xl" /> Outstanding properties
              </p>
              <p className="flex items-center mt-4">
                <MdStarRate className="text-blue-500 mr-2 font-bold text-2xl" /> A safe and trustworthy
              </p>
              <p className="flex items-center mt-4">
                <MdStarRate className="text-blue-500 mr-2 font-bold text-2xl" /> Buy with confidence
              </p>
              <p className="flex items-center mt-4">
                <MdStarRate className="text-blue-500 mr-2 font-bold text-2xl" /> Market-leading research
              </p>
            </div>
          </div>

          <div className="max-w-md mt-6 md:mt-0 md:ml-8 bg-gray-800 p-4 rounded-lg shadow-md">
            <video className="w-full rounded-md overflow-hidden" width="100%" height="auto" controls volume={0}>
              <source src={video1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <Customer />
    </>
  );
}

export default Benefit;
