import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from '../config/Auth';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Add your login logic here, e.g., authenticate with a backend or Firebase
    try {
      const result = await axios.post('http://localhost:4000/login', { email, password });
  
      console.log(result);
  
      if (result.data === 'login successful') {
        // Move the navigate call inside the then block
        navigate('/');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.log(err);
      setError('Error logging in. Please try again.');
    }
  
    setLoading(false);
  

    // Simulate a delay for demonstration purposes (remove this in a real implementation)
    setTimeout(() => {
      setLoading(false);
      setError('Login functionality is not implemented in this example.');
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className="text-3xl font-semibold mb-4">Login to Your Account</h1>
      <hr className="w-full border-t-2 border-gray-300 mb-4" />
      <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-[20rem] focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-[20rem] focus:outline-none focus:ring focus:border-blue-300"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 w-[20rem] h-[3.4rem] text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>

      <div className="my-8 flex font-bold">
        <p className="text-gray-700 font-bold">OR</p>
      </div>

      <Auth />

      <p className="mt-4">
  Don't have an account?
  <Link to="/signup" className="text-blue-500  font-bold hover:text-blue-700 ml-2">Sign Up</Link>
</p>


      {error && <p className="text-red-500 my-4">{error}</p>}
    </div>
  );
};

export default Login;
