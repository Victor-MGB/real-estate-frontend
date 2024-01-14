import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios'

function Newsletter() {
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubscribe = async(e)=>{
    e.preventDefault();

    try{
      await axios.post('http://localhost:4000/subscriber',{email});
      setIsSuccess(true);
      setMessage('Subscription successful!');
      setShowMessage(true);
      setEmail('');
    }catch(error){
      console.error('Error subscribing:',error);
      setIsSuccess(false);
      setMessage('Subscription failed. Please try again later.');
      setShowMessage(true);
    }
  }

  const handleCloseMessage = () => {
    setShowMessage(false);
  };


  return (
    <>
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6">Subscribe to Our Newsletter</h2>
        <form className="max-w-md mx-auto flex items-center" onSubmit={handleSubscribe}>
          <input
            className="w-full py-3 px-4 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            placeholder="Enter your email to see our latest news"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Subscribe
          </button>
        </form>


        {showMessage && (
          <div className={`mt-4 ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded-md`}>
            {message}
            <button
              className="ml-4 px-2 py-1 rounded-md bg-white text-gray-800 hover:bg-gray-300 focus:outline-none"
              onClick={handleCloseMessage}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>

    <Footer/>
    </>
  );
}

export default Newsletter;
