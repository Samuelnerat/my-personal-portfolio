import React from "react";
import resume from "../../data/Favour_Samuel_Resume.pdf";
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im"
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";

function MobileTools() {
  
    const data = [
        {
       id: 1,
       icon: <ImGit />,
       text: "Git",
       color: "#F05032",
     },
     {
       id: 2,
       icon: <FaReact />,
       text: "React",
       color: "#60DAFB"
     },
     {
       id: 3,
       icon: <SiTailwindcss />,
       text: "Tailwind",
       color: "#07B7D4"
     },
     {
       id: 4,
       icon: <IoLogoHtml5 />,
       text: "HTML",
       color: "#F16529"
     },
     {
       id: 5,
       icon: <DiCss3Full />,
       text: "CSS",
       color: "#2965F1"
     },
     {
       id: 6,
       icon: <DiJavascript1 />,
       text: "JavaScript",
       color: "#F7DF1E"
     },
     {
       id: 7,
       icon: <SiTypescript />,
       text: "TypeScript",
       color: "#3074C0"
     },
     {
       id: 9,
       icon: <TbBrandNextjs />,
       text: "NextJS",
       color: "#111"
     },
   ];
 
  return (
    <div className='flex flex-col justify-center items-center h-full overflow-hidden'>
        <div className='text-center'>
            <p className='text-4xl font-semibold pb-2 dark:text-gray-400 leading-[50px]'>Technologies I work with</p>
            <p className="text-[20px] leading-[35px] dark:text-gray-300 word-break mt-[24px] max-w-[550px] whitespace-normal">
                Here are some of the tools I've worked with over the years, for my personal and professional projects.
            </p>
            <div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-3 bg-purple-900 dark:bg-violet-600 text-white dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
                >
                    <a href={resume} target="_blank" rel="noopener noreferrer">View Resumé</a>
                </motion.button>
                <div className="flex justify-center items-center mt-12">
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-[24px] space-y-3">
                        {data.map(({ id, icon, text, color }) => (         
                            <li key={id} className="w-[163px] h-[77px] mt-3 bg-white dark:bg-gray-400 flex justify-center items-center ">
                                <span className="flex gap-[16px] w-[101px] justify-evenly">
                                    <span className="w-[35px] h-[35px]">
                                        {React.cloneElement(icon, { color: color, size: 24 })}
                                    </span>
                                    <p className="flex justify-center items-center text-[14px] text-black dark:text-white leading-[19px]">
                                        {text}
                                    </p>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MobileTools;
