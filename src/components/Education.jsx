import React from 'react';
import { myEducation } from '../constants';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt";

const Education = () => {
  return (
    <div className='overflow-hidden sm:mt-20 mt-10' id='education'>
      <h1 className='text-white sm:text-4xl mb-3 text-2xl sm:mb-5 font-bold'>Education</h1>
      <div className='text-gray-300 p-5 sm:flex items-center sm:py-10 rounded sm:flex-col bg-gray-900'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='sm:w-[800px] sm:flex sm:flex-col sm:gap-6'  // Flex layout with gap
        >
          {myEducation.map((item, index) => {
            return (
              
                <motion.div
                key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className='border transition-transform duration-300 rounded-lg mb-8 px-4 py-4 flex flex-col justify-center'
                >
                  <h1 className='text-blue-400 text-4xl'>{item.class}</h1>
                  <h3 className='sm:text-xl mt-2 '>{item.grade}</h3>
                  <p className='mt-2 sm:block hidden'>{item.description}</p>
                </motion.div>
              
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;