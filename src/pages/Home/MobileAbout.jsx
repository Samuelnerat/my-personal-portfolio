import React from 'react';
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";

function MobileAbout() {
  return (
    <div className='flex flex-col justify-center items-center h-full overflow-hidden mt-20'>
      <div className='text-center'>
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-2 dark:text-gray-400'>HI, <em className='font-medium'>I'm</em></p>
        <p className='text-purple-900 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif dark:text-violet-600'>NERAT SAMUEL</p>

        <div className="justify-center mt-5 sm:mt-8 md:mt-10 lg:mt-12">
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[35px] word-break mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[48px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl whitespace-normal'>I have a passion for creating engaging user experiences. I am excited to bring my knowledge and experience to a team and contribute to a company's success. Welcome to my portfolio!</p>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-purple-900 dark:bg-violet-600 text-white dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer"
          >
            <a href={resume} target="_blank"  rel="noopener noreferrer">View Resumé</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default MobileAbout;