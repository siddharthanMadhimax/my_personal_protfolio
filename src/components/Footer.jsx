import React from 'react';
import { FaInstagram, FaLinkedin, FaPhone,FaGithub } from 'react-icons/fa';
import { myFoot } from '../constants';

const Footer = () => {
  return (
    <div className='bg-gray-800 mt-10'>
      <div className='flex items-center justify-center p-10 gap-5 sm:gap-20'>
        {myFoot.map((item, index) => {
          let icon;
          if (item.name === "gitHub") {
            icon = <FaGithub className="sm:mr-2 mr-1 text-gray-200" />;
          } else if (item.name === "linkedin") {
            icon = <FaLinkedin className="sm:mr-2 mr-1 text-gray-200" />;
          } else if (item.name === "6380448496") {
            icon = <FaPhone className="sm:mr-2 mr-1 text-gray-200" />;
          }

          return (
            <div key={index} className='last:pointer-events-none'>
              <h1 className='text-blue-700 sm:text-xl text-sm sm:font-bold flex items-center'>
                <a 
                  target='_blank' 
                  href={item.link} 
                  rel='noopener noreferrer' 
                  className="flex items-center "
                >
                  {icon}
                  {item.name}
                </a>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;  
