import React from 'react';
import { Carousel } from "antd";
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";

function About() {
  const initals = [
    {
            id: 1,
            text: "F",
            data: [
              {
                id: 1,
                txt: "F",
              },
              {
                id: 2,
                txt: "R",
              },
              {
                id: 3,
                txt: "O",
              },
              {
                id: 4,
                txt: "N",
              },
              {
                id: 5,
                txt: "T",
              },
              {
                id: 6,
                txt: "E",
              },
              {
                id: 7,
                txt: "N",
              },
              {
                id: 8,
                txt: "D",
              },
            ],
          },
      
      
        {
          id: 2,
          text: "D",
          data: [
            {
              id: 1,
              txt: "D",
            },
            {
              id: 2,
              txt: "E",
            },
            {
              id: 3,
              txt: "V",
            },
            {
              id: 4,
              txt: "E",
            },
            {
              id: 5,
              txt: "L",
            },
            {
              id: 6,
              txt: "O",
            },
            {
              id: 7,
              txt: "P",
            },
            {
              id: 8,
              txt: "E",
            },
            {
              id: 9,
              txt: "R",
            },
          ],
        },
      ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <p className='text-purple-900 text-7xl font-bold font-serif dark:text-violet-600'>NERAT SAMUEL</p>
        <p className='text-4xl font-serif font-thin pt-5 dark:text-gray-200'>FRONTEND DEVELOPER</p>

        {/* <div className="text-justify ">
          <p className='text-3xl font-semibold mb-2 dark:text-gray-400'>HI,</p>
          <p className=' text-base dark:text-gray-300'>I'm a frontend developer, with a passion for creating engaging user experiences. I am excited to bring my knowledge and experience to a team and contribute to a company's success. Welcome to my portfolio!</p>
        </div> */}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-3 bg-purple-900 dark:bg-violet-600 text-white dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
        ><div><a href={resume} target="_blank"  rel="noopener noreferrer">View Resumé</a></div>
          {/* View Resumé */}
        </motion.button>
      </div>

      <Carousel autoplay effect="fade" dots={false}>
        {initals.map(({ id, text, data }) => (
          <div className="col-span-1" key={id}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative pl-20"
            >
              <div className="w-[300px] h-[250px] bg-purple-950 dark:bg-violet-800 flex items-center justify-center">
                <h1 className="text-[200px] font-[700] text-white dark:text-zinc-900"> {text} </h1>
              </div>
            </motion.div>
            <div className="gap-x-[15px] py-2 flex flex-wrap ">
              {data.map(({ txt, id }) => (
                <div
                  key={id}
                  className="w-[40px] h-[44px] bg-white dark:bg-gray-300 font-[700] text-[20px] mt-8 leading-[30.62px] grid justify-center items-center place-items-center"
                >
                  <p>{txt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      <div className="ml-40 text-justify w-[700px]">
        <p className='text-3xl font-semibold mb-2 dark:text-gray-400'>HI,</p>
        <p className=' text-base dark:text-gray-300'>I'm a frontend developer, with a passion for creating engaging user experiences. I am excited to bring my knowledge and experience to a team and contribute to a company's success. Welcome to my portfolio!</p>
      </div>
    </div>
  );
}

export default About;