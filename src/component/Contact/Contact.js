import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,FaTwitter, FaLinkedin } from 'react-icons/fa';
import Newsletter from '../Home/Newsletter';
import customerCare from '../asset/customerCare.jpg';

function Contact() {
  return (
    <>
      <section className="bg-gray-100 p-8 flex flex-col justify-center md:flex-row items-center">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Info</h2>
                <div className="mb-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  Mailing Address: Your Company, Street, City, Country
                </div>
                <div className="mb-2 flex items-center">
                  <FaPhoneAlt className="mr-2 text-blue-500" />
                  Phone Number: +1 123 456 7890
                </div>
                <div className="mb-2 flex items-center">
                  <FaEnvelope className="mr-2 text-blue-500" />
                  Email Address: info@yourcompany.com
                </div>
                <div className="mb-2 flex items-center">
                  <FaClock className="mr-2 text-blue-500" />
                  Business Hours: Mon-Fri: 9 AM - 5 PM
                </div>

                {/* Social Links */}
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/Victor01808002" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/victor-osondu-1985a7237/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src={customerCare} alt="customer_care" className="w-[42rem] md:w-1/3 rounded-lg shadow-md mt-8 md:mt-0" />
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default Contact;
