import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'HOME', link: '/' },
    { id: 2, text: 'SERVICES', link: '/services' },
    { id: 3, text: 'PROPERTY', link: '/property' },
    { id: 4, text: 'BLOGS', link: '/blogs' },
    { id: 6, text: 'CONTACT US', link: '/contact' },
    // { id: 7, text: 'LOGIN', link: '/login' },
  ];

  return (
    <div className='bg-white-700 flex justify-around shadow-sm items-center h-24 max-w-[1240] mx-auto px-4 text-white'>
      <h1 className='text-3 text-blue-500 font-bold'>
        Vimo_Soundz-Housing
      </h1>

      {/* Desktop navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 text-black hover:bg-gray-200 rounded-sm m-2 cursor-pointer duration-300 hover:text-black font-bold'
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile View */}
      <div onClick={handleNav} className='block md:hidden text-black'>
        {nav ? <IoMdClose size={40} /> : <IoMenuSharp size={40} />}
      </div>

      {/* Mobile Navigation menu */}
      <ul
  className={`${
    nav
      ? 'fixed md:hidden mt-[6rem] left-0 top-0 absolute text-black rounded-sm bg-gray-50 w-[80%] h-full border-r-gray-900 ease-in-out duration-500 z-50'
      : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
  }`}
>
  {/* Mobile logo */}
  {navItems.map(item => (
    <li
      key={item.id}
      className='p-4 font-bold uppercase ml-[2rem] mt-6 rounded-xl hover:w-[30.5rem] hover:bg-gray-100 duration-300 hover:text-gray cursor-pointer border-gray-600'
    >
      <Link to={item.link} onClick={handleNav}>
        {item.text}
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Navbar;
