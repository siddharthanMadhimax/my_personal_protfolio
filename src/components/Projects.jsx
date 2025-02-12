import React from 'react';
import { myProjects } from '../constants';

const Projects = () => {
  return (
    <div id='projects' className='mt-20 overflow-hidden'>
      <h1 className='text-white text-5xl mb-8'>Projects</h1>
      <div className='sm:bg-gray-800 sm:p-12 grid sm:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10 rounded-lg'>
        {myProjects.map((myPro, index) => {
          // Condition to apply 'pointer-events-none' for the last project
          const isLastProject = myPro.title=="Full Stack Ecommerce";
          
          return (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg hover:scale-105 transition-transform flex flex-col items-center justify-center px-4 py-4 border text-gray-300 ${
                isLastProject ? 'pointer-events-none' : ''
              }`}
            >
              <div className="relative overflow-hidden w-full h-full">
                {/* container for image and description */}
                <img src={myPro.image} className='w-full h-full object-cover' alt="" />
                {/* description */}
                <div className="absolute w-full h-full p-2 left-0 top-0 opacity-0 hover:opacity-100 transition-opacity duration-300 justify-center bg-opacity-80 bg-gray-900 text-gray-400 flex items-center">
                  <p className='text-base font-semi-bold text-gray-300'>{myPro.Description}</p>
                </div>
              </div>
              <h1 className='text-blue-400 mb-3 text-2xl'>{myPro.title}</h1>
              <button className='bg-blue-600 mt-3 px-5 py-2 hover:bg-blue-700 rounded-lg'>
                <a target='_blank' href={`${myPro.code}`} className='cursor-pointer'>
                  {myPro.GitHubLink}
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
