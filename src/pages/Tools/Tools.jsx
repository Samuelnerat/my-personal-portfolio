import React, { useState, useEffect } from 'react';
import { IoLogoHtml5 } from "react-icons/io";
import { ImGit } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";

const Tools = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [averageX, setAverageX] = useState(0);
  const [averageY, setAverageY] = useState(0);

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


  useEffect(() => {
    // Calculate average position of icons
    let totalX = 0;
    let totalY = 0;
    data.forEach((item, index) => {
      const { x, y } = calculatePosition(index);
      totalX += x;
      totalY += y;
    });
    setAverageX(totalX / data.length);
    setAverageY(totalY / data.length);
  }, [data]);

  const calculatePosition = (index) => {
    const totalIcons = data.length;
    const angle = (index * (360 / totalIcons)) % 360;

    const radius = 200; 

    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return { x, y };
  };

  return (
    <div className='grid grid-cols-2 gap-96 mt-24 relative'>
      <div className='col-span-1 w-[470px] mt-10'>
        <p className='text-4xl font-semibold pb-2 dark:text-gray-400'>Technologies i work with</p>
        <p className='dark:text-gray-300'>
        Here are some of the tools i've worked with over the years, for my personal and professional projects.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-3 bg-purple-900 dark:bg-violet-600 text-white dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
        ><div><a href={resume} target="_blank"  rel="noopener noreferrer">View Resumé</a></div>
          {/* View Resumé */}
        </motion.button>
      </div>
      <div className="col-span-1 mt-24 ml-20">
        {data.map((item, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <div
              key={item.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="rounded-full flex items-center justify-center text-white font-bold absolute"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredIcon(item)}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{ color: item.color }}
              >
                {React.cloneElement(item.icon, { style: { fontSize: '3rem' } })}
              </motion.div>
              {hoveredIcon && hoveredIcon.id === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-gray-900 text-white p-2 rounded-md"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  {hoveredIcon.text}
                </motion.div>
              )}
            </div>
          );
        })}
        <div className="absolute top-[50%] left-[50%] transform translate[-50% -50%] text-black dark:text-gray-400 font-bold text-4xl ml-48">
          Skills/Tools
        </div>
      </div>
    </div>
  );
};

export default Tools;
