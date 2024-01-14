import React from 'react';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h1 className="text-2xl font-bold mb-4">Real Estate Website</h1>
            <p className="text-sm">The attention to detail and personalized approach made the entire process smooth and stress-free.</p>
          </div>
  
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h1 className="text-2xl font-bold mb-4">Company</h1>
            <ul className="list-none">
              <li>
                <button className="text-gray-400 hover:text-white" disabled>About Us</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white" disabled>Services</button>
              </li>
              {/* Add more buttons as needed */}
            </ul>
          </div>
  
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <h1 className="text-2xl font-bold mb-4">Download Our App</h1>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white" disabled>
                <i className="fab fa-apple"></i> App Store
              </button>
              <button className="text-gray-400 hover:text-white" disabled>
                <i className="fab fa-android"></i> Google Play
              </button>
            </div>
          </div>
  
          {/* Add more sections as needed */}
        </div>
      </footer>
    );
  }
  
  export default Footer;