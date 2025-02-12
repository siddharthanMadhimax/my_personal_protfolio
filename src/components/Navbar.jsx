import React, { useState } from 'react';
import { logo } from '../assets';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleFunction = (linkTitle) => {
    setToggle(false); // Close the menu after selecting
    setActive(linkTitle);
  };

  return (
    <div className='navbar'>
      <nav className='text-white'>
        <div className='flex items-center justify-between py-4 max-sm:py-0 px-12'>
          <div className='flex-shrink-0'>
            <Link to="/">
              <img className='w-[40px] h-[40px]' src={logo} alt="Logo" />
            </Link>
          </div>

          <div className=''>
            <ul className='hidden sm:flex gap-10'>
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  onClick={() => handleFunction(links.title)}
                  className={`cursor-pointer ${active === links.title ? 'text-white' : 'text-gray-400'}`}
                >
                  <a href={`#${links.id}`}>{links.title}</a>
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex'>
              <button className='text-gray-400' onClick={() => setToggle((prevToggle) => !prevToggle)}>
                {toggle ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${toggle ? 'flex' : 'hidden'} sm:hidden bg-black text-white py-4 px-6 flex-col fixed top-0 left-0 w-full h-full z-50`}>
      <ul className='flex flex-col items-center gap-10 mt-20'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleFunction(link.title)}
              className={`cursor-pointer ${active === link.title ? 'text-white' : 'text-gray-400'}`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
