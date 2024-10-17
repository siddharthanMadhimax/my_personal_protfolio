import React from 'react'
import { myEducation } from '../constants'
const Education = () => {
  return (
    <div className='sm:mt-20 mt-10'>
      <div className='text-gray-300 p-5 sm:flex items-center sm:py-10 rounded sm:flex-col bg-gray-900'>
        {myEducation.map((item,index)=>{
          return <div key={index} className='sm:w-[800px]  border hover:scale-105 transition-transform duration-300 rounded-lg mb-8 last:mb-0 px-4 py-4 flex flex-col justify-center'>
            <h1 className='text-blue-400 text-4xl'>{item.class}</h1>
            <h3 className='sm:text-xl mt-2 '>{item.grade}</h3>
            <p className='mt-2 sm:block hidden'>{item.description}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Education