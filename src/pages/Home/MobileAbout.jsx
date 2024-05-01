import React from 'react';
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";

function MobileAbout() {
  return (
    <div className='grid text-center justify-center items-center mt-56'>
      <p className='text-4xl font-semibold mb-2 dark:text-gray-400'>HI, <em className='font-medium'>I'm</em></p>
      <p className='text-purple-900 text-7xl font-bold font-serif dark:text-violet-600'>NERAT SAMUEL</p>

      <div className="justify-center mt-5 ">
          <p className=' text-base dark:text-gray-300 text-[20px] leading-[35px] word-break mt-[24px] w-[550px] whitespace-no-wrap'>I have a passion for creating engaging user experiences. I am excited to bring my knowledge and experience to a team and contribute to a company's success. Welcome to my portfolio!</p>
      </div>
      <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 bg-purple-900 dark:bg-violet-600 text-white dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
          ><div><a href={resume} target="_blank"  rel="noopener noreferrer">View Resumé</a></div>
          </motion.button>
      </div>
    </div>
  );
}

export default MobileAbout;
