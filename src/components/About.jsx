import React from 'react'
import { aboutMe } from '../constants'
import {motion} from "framer-motion"
import Tilt from "react-parallax-tilt"

const About = () => {
  
  return (
    <div className='mt-16' id='about'>
      <h1 className='sm:text-5xl text-white mb-4 sm:font-bold  '>About</h1>
      <div className='grid  grid-cols-1 sm:bg-gray-800 rounded-lg justify-center sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-10 text-white  sm:Pbg-gray-900 sm:p-12'>
          {aboutMe.map((about,index)=>{
            return <Tilt>
              <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:index*0.5}} key={about.id} className=' mb-8 px-2 py-6 rounded-xl border bg-gray-800 transition-transform transform hover:scale-105
            hover:bg-gray-900 hover:shadow-lg gradient-border h-full'>
              <h1 className='sm:text-2xl text-blue-400 text-xl sm:font-bold mb-4'>{about.head}</h1>
              <p className='sm:text-base text-gray-300 sm:px-4'>{about.description}</p>
            </motion.div >
            </Tilt>
          })}
      </div>
    </div>
  )
}

export default About