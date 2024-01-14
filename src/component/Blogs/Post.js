import React from 'react'
import in2 from '../asset/interior/in2.jpg'
import Blogs from '../Home/Blogs'
import Newsletter from '../Home/Newsletter'

function Post() {
  return (
    <>
      <section className="bg-gray-100 p-8 flex flex-col md:flex-row items-center">
  <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Our Blogs</h1>
      <p className="text-gray-800">
        <span className="font-bold">Introduction:</span> Welcome to Vimo_Soundz Housing, where dreams find a home. We specialize in turning your vision into a reality, creating spaces that blend comfort and style seamlessly.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Design Excellence:</span> Our approach focuses on light-filled spaces, open designs, and a harmonious balance of functionality and aesthetics. Our expert team turns your dream home into a unique expression of your lifestyle.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Functional Elegance - The Kitchen:</span> In our homes, the kitchen is a focal point—where culinary dreams come alive and family and friends gather for lasting memories. Our designs prioritize functionality and style, creating a kitchen that's both practical and visually stunning.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Serene Retreats - Bedrooms:</span> Bedrooms in our homes are designed as serene retreats for ultimate relaxation. From cozy master suites to imaginative children's rooms, each space is crafted with attention to detail and a commitment to well-being.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Outdoor Bliss - Gardens and Porches:</span> Step outside into landscaped gardens and welcoming porches designed for shared moments and outdoor joy. We extend your living area beyond walls, creating spaces for morning coffees and family barbecues.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Adaptable Living:</span> Your dream home isn't static; it's a living canvas that grows with your journey. Our designs and materials prioritize durability and timelessness, ensuring your home remains a symbol of your experiences.
      </p>
      <p className="text-gray-800">
        <span className="font-bold">Conclusion:</span> At Vimo_Soundz Housing, we believe everyone deserves a home that inspires and rejuvenates. 
        Let's embark on the journey to create a dream home where comfort meets style. Your dream home awaits with Vimo_Soundz Housing.
      </p>
    </div>
  </div>

  <img src={in2} alt="interior" className="w-full md:w-1/2 rounded-lg shadow-md"/>
</section>



      <Blogs />
      <Newsletter />
    </>
  )
  }

export default Post