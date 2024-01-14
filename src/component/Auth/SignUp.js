import React, { useState } from 'react';
import axios from 'axios';
import { Auth } from '../config/Auth';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!agree) {
      setError('Please agree to the terms and conditions');
      return;
    }

    // Perform the sign-up logic here (e.g., send form data to a server)
    axios.post('http://localhost:4000/signup', { fullName, email, password, agree })
      .then(result => {
        console.log(result.data);
        navigate('/'); // Use navigate after successful signup
      })
      .catch(err => {
        console.log(err);
        setError('Error signing up. Please try again.');
      });

    setLoading(true);

    // Simulate a delay for demonstration purposes (remove this in a real implementation)
    setTimeout(() => {
      setLoading(false);
      setError('Sign-up functionality is not implemented in this example.');
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center mt-10'>
      <h1 className="text-3xl font-semibold mb-4">Create Account</h1>
      <hr className="w-full border-t-2 border-gray-300 mb-4" />
      <form onSubmit={handleSignUp} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-[20rem] focus:outline-none focus:ring focus:border-blue-300"
        />
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

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
          />
          <p className="text-gray-600">I agree with the terms and conditions</p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 w-[20rem] h-[3.4rem] text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      <div className="my-8 flex font-bold">
        <p className="text-gray-700 font-bold">OR</p>
      </div>

      <Auth />

      <p className="mt-4">
        Already have an account?
        <Link to='/Login'  className="text-blue-500 font-bold hover:text-blue-700 ml-2">Login</Link>
      </p>

      {error && <p className="text-white-500 bg-red-500 text-white font-bold rounded mt-4 py-4">{error}</p>}
    </div>
  );
};

export default SignUp;
