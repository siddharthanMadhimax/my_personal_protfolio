import React from 'react';
import { mySkills } from '../constants';

const Skills = () => {
  return (
    <div className='mt-12'>
      <h1 className='text-white text-5xl font-bold mb-8'>Skills</h1>
      <div className='grid sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] max-sm:grid-cols-3 gap-8'>
        {mySkills.map((item, index) => {
          return <div key={index} className='flex flex-col items-center'>
            <img
              className='sm:w-[100px] w-[300px]  rounded-full animate-spin-slow' // Apply the animation class here
             
              src={item.image}
              alt=""
            />
            <p className='text-gray-300 sm:mt-8 mt-6 sm:text-base text-sm'>{item.title}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default Skills;