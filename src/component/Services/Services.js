import React,{useState} from 'react';
import slider2 from '../asset/slider2.jpg';
import slider6 from '../asset/slider6.jpg';
import slider5 from '../asset/slider5.jpg';
import Newsletter from '../Home/Newsletter';

function Services() {
  const [showMoreProperty, setShowMoreProperty] = useState(false);
  const [showMoreConstruction, setShowMoreConstruction] = useState(false);
  const [showMoreOnlineServices, setShowMoreOnlineServices] = useState(false);

  const toggleShowMore = (type) => {
    switch (type) {
      case 'property':
        setShowMoreProperty(!showMoreProperty);
        break;
      case 'construction':
        setShowMoreConstruction(!showMoreConstruction);
        break;
      case 'onlineServices':
        setShowMoreOnlineServices(!showMoreOnlineServices);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className="py-10">
        <div className='flex flex-col md:flex-row mb-12'>
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Property Management</h1>
            <p className="text-gray-600 mb-4">
            At [Your Company Name], we pride ourselves on delivering comprehensive property management services designed to meet
             your unique requirements. Our team of dedicated professionals is committed to ensuring that your property is well-maintained, 
             tenants are satisfied, and your investment achieves its full potential.</p>

             <p className={showMoreProperty ? 'block' : 'overflow-hidden h-20 text-gray-600'}>
            At [Your Company Name], we pride ourselves on delivering comprehensive property management services designed to meet your unique requirements.
            Our team of dedicated professionals is committed to ensuring that your property is well-maintained, tenants are satisfied, and your investment achieves its full potential.
          </p>


            <button onClick={() => toggleShowMore('property')}
 className="bg-blue-500 text-white px-4 py-2 rounded">{showMoreProperty ? 'Show Less' : 'Show More'}
</button>
          </div>

          <div className="md:w-1/2">
            <img src={slider2} alt='image_' className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className='flex flex-col md:flex-row mb-12'>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src={slider6} alt='image_' className="w-full h-auto" />
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">Construction services</h1>
            <p className="text-gray-600 mb-4">At [Your Company Name], we take pride in providing top-notch construction services that bring your vision to life. With a commitment to quality craftsmanship, innovation, and client satisfaction, we stand as your trusted partner in turning your construction dreams into reality.</p>
            <p className={showMoreProperty ? 'block' : 'overflow-hidden h-20 text-gray-600'}>
            At [Your Company Name], we pride ourselves on delivering comprehensive property management services designed to meet your unique requirements.
            Our team of dedicated professionals is committed to ensuring that your property is well-maintained, tenants are satisfied, and your investment achieves its full potential.
          </p>


            <button onClick={() => toggleShowMore('property')}
 className="bg-blue-500 text-white px-4 py-2 rounded">{showMoreProperty ? 'Show Less' : 'Show More'}
</button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <img src={slider5} alt='image_' className="w-full h-auto" />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Online services</h1>
            <p className="text-gray-600 mb-4">Welcome to [Your Company Name], where we redefine convenience with our comprehensive range of online services. Embracing the digital era, we prioritize making your experience with us smooth, efficient, and accessible from the comfort of your home.</p>

            <p className={showMoreProperty ? 'block' : 'overflow-hidden h-20 text-gray-600'}>
            At [Your Company Name], we pride ourselves on delivering comprehensive property management services designed to meet your unique requirements.
            Our team of dedicated professionals is committed to ensuring that your property is well-maintained, tenants are satisfied, and your investment achieves its full potential.
          </p>

            <button onClick={() => toggleShowMore('property')}
 className="bg-blue-500 text-white px-4 py-2 rounded">{showMoreProperty ? 'Show Less' : 'Show More'}
</button>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Services;
