import React from 'react';
import { MdStarRate } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import ShakeHands from './ShakeHands';
import shakinghands1 from '../asset/shakinghands1.jpg';
import Recommend from './Recommend';

function ServiceCard({ title, color }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={props} className={`bg-${color}-500 p-8 rounded-lg shadow-md`}>
      <MdStarRate className="text-yellow-500 text-3xl mb-4" />
      <span className="block text-xl font-semibold">{title}</span>
    </animated.div>
  );
}

function OurServices() {
  return (
    <>
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center mt-[2rem]">
        <h3 className="text-4xl font-semibold mb-4">Our Services</h3>
        <h2 className="text-5xl font-bold mb-6">
          Find Your Dream House with Us
        </h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          In our dream house, light-filled spaces and open designs create a
          haven where daily life transforms into cherished memories. The kitchen
          beckons culinary dreams, bedrooms offer serene retreats, and outside, a
          landscaped garden sets the stage for shared moments. It's more than
          architecture; it's a living canvas reflecting life's journey,
          adapting, growing, and becoming the backdrop to a tapestry of
          experiences. Welcome to our dream house – where comfort meets joy, and
          aspirations become reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Property Management" color="blue" />
          <ServiceCard title="Construction Services" color="green" />
          <ServiceCard title="Online Services" color="purple" />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="animate-fade-up">
          <ShakeHands imageSrc={shakinghands1} altTxt="hands together" className='w-[20rem]' />
        </div>
      </div>
    </section>

    <Recommend />
    </>
  );
}

export default OurServices;
