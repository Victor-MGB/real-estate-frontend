import React from 'react';
import { IoCall } from 'react-icons/io5';

const Call = ({ phoneNumber }) => {
  const handleCallNow = () => {
    // Implement functionality to initiate a call, using browser features or a third-party service.
    // You might want to use the "tel" URI to trigger the phone call.
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center space-x-2">
        <IoCall className="text-3xl" />
        <span className="text-xl font-semibold">Call <i className="text-gray-500">{phoneNumber}</i></span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4" onClick={handleCallNow}>
        Call Now
      </button>
    </div>
  );
};

export default Call;
