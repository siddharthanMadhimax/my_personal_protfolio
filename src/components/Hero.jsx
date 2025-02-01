import React, { useEffect, useState } from 'react';
import { hero, homeVideo } from '../assets';
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline"


const Hero = () => {
  const developer = 'developer'.split(''); // Split the word into individual letters
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and below the position
    visible: { opacity: 1, y: 0 }, // Appear and move to final position
  };

  const containerAnimation = {
    hidden: {
      transition: {
        staggerChildren: 0.1, // Delay between each letter's appearance
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.1, // Delay between each letter's appearance
        delayChildren: 0.7,    // Delay before the first letter appears
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Toggle visibility to reset animation
    }, 2000); // Change to your desired interval (1 second for typing effect, plus the duration of animation)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div>
      <div className='flex max-sm:flex-col mt-0 justify-between sm:mt-10 '>
        {/* -----left side----- */}
        <div className='order-2 sm:order-1'>
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2 }} 
            id='/' 
            className='sm:mt-24 mt-12'
          >
            <h1 className='text-blue-800 sm:text-6xl text-4xl font-bold'>Hi I'm <span className='name-blink'>Siddha<span className='pink-blink'>rthan</span></span></h1>
          </motion.div>

          <motion.div
            className='text-white sm:mt-12 mt-5'
            variants={containerAnimation}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // Toggle animation state
          >
            <h1 className='font-bold sm:text-7xl text-4xl'>
              Full Stack {developer.map((char, index) => (
                <motion.span className='type-effect' key={index} variants={letterAnimation} transition={{ duration: 0.2 }}> 
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
        {/* ---right side---- */}
    <div className='order-1 sm:order-2'>
    <motion.div 
          className='relative  items-center sm:p-2 rounded-full sm:mt-12 justify-center sm:bottom-10'
          initial={{ }} // Start smaller
          animate={{ opacity: 1, scale: 1, boxShadow: "0 0 20px 10px rgba(0, 123, 255, 0.7)" }} // Grow and add glow
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} // Pulsing effect
        >
          <div className='overflow-hidden rounded-full max-w-full sm:w-[500px] sm:h-[460px] relative '>
          <Spline scene="https://prod.spline.design/G9KcrntkCAXPJ9vC/scene.splinecode" className='max-sm:hidden' />
          <video className='object-cover pointer-events-none w-full h-full' autoPlay loop muted playsInline>
               <source src={homeVideo} />
          </video>
         

          </div>
          
         
        </motion.div>
    </div>
      </div>  
    </div>
  );
};

export default Hero;


            // <video className='object-cover pointer-events-none w-full h-full' autoPlay loop muted playsInline>
            //   <source src={homeVideo} />
            // </video>