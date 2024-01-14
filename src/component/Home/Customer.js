import React from 'react';
// import ava5 from '../asset/avatar/ava5.jpg';
import ava1 from '../asset/avatar/ava1.jpg';
import ava2 from '../asset/avatar/ava2.jpg';
import ava3 from '../asset/avatar/ava3.jpg';
import ava4 from '../asset/avatar/ava4.jpg';
import Newsletter from './Newsletter';

function Customer() {
  return (
    <>
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">What Our Customers Say</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          { avatar: ava2, name: 'Avatar Avatar', designation: 'Top Customer', date: '02-04-2022' },
          { avatar: ava3, name: 'Avatar Avatar', designation: 'Top Customer', date: '02-04-2022' },
          { avatar: ava1, name: 'Avatar Avatar', designation: 'Top Customer', date: '02-04-2022' },
          { avatar: ava4, name: 'Avatar Avatar', designation: 'Top Customer', date: '02-04-2022' },
        ].map((customer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img src={customer.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{customer.name}</h2>
                <p className="text-gray-500">{customer.designation}</p>
              </div>
            </div>

            <p className="text-gray-700">
              Working with Vimo-Housing was an absolute pleasure. From the personalized property viewings to the expert negotiation,
              their team's professionalism stood out. Team of developer made the process stress-free, understanding my needs and guiding me to my dream home.
              The transparent communication and dedication to my satisfaction are commendable.
              I highly recommend Vimo-Housing for a smooth and successful home-buying journey.
            </p>

            <div className="mt-4">
              <span className="text-gray-500">Date: {customer.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <Newsletter />
    </>
  );
}

export default Customer;
