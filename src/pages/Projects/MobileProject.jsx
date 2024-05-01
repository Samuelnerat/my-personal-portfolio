import React from 'react';
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MobileProject() {
    const data = [
        {
            id: 1,
            img: "https://res.cloudinary.com/du1fj63cs/image/upload/v1713272625/landing_page_ftr44m.png",
            title: "Portfolio",
            subtitle: "My website. Know me better",
            stack: "ReactJS, Tailwind",
            codeLink: "https://github.com/Samuelnerat/my-personal-portfolio",
            viewURL: "https://my-personal-portfolio-e6cs.onrender.com/",
            viewSite: "View Link",
            code: "Code",
        },
    ]

  return (
    <div className='grid text-center justify-center items-center mt-32'>
        <p className='font-semibold text-4xl leading-[50px] pb-2 dark:text-gray-400'>Some Cool Side Projects I've Explored</p>
        <p className='dark:text-gray-300 text-[20px] leading-[35px] word-break mt-[24px] w-[550px] whitespace-no-wrap'>
            In my free time, I love fiddling with fun side projects. 
            They're like little adventures that help me grow. 
            Check out my GitHub page for more!
        </p> 

        <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-3 bg-purple-900 text-white dark:bg-violet-600 dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
            ><div><a href='https://github.com/Samuelnerat' target="_blank">View Github</a></div>
            </motion.button>


          <div className="w-[80%] mx-auto lg:overflow-auto lg:h-[480px] mt-7">
          {data.map(
          ({
            id, img, title, subtitle, stack, code, codeLink, viewSite, viewURL, }) => (
            <div className="mb-[20px]" key={id}>
              <motion.div className="rounded lg:overflow-hidden shadow-lg w-80 h-full mx-auto bg-stone-100 dark:bg-neutral-700" key={id} >
                <LazyLoadImage src={img} alt={title} effect="blur"  placeholderSrc={img} />
                <div className="p-5">
                  <div className="font-semibold text-[18px] leading-[23px] text-black dark:text-gray-300">
                    {title}
                  </div>
                  <p className="text-gray-400 text-[14px] leading-[20px]">
                    {subtitle}
                  </p>
                  <p className="mt-[10px] text-black dark:text-gray-300">
                    {stack}
                  </p>
                  <div className="mt-[10px] flex gap-[30px]">
                    {code && (
                      <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black text-[14px] hover:opacity-75  hover:scale-110 transistion-all duration-500">
                        <>
                          <TbBrandGithub className="dark:fill-white fill-black" />
                          <a href={codeLink} className="dark:text-gray-300">
                            {code}
                          </a>
                        </>
                      </span>
                    )}

                    <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black text-[14px] hover:opacity-75 hover:scale-110 transistion-all duration-500">
                      <AiFillEye className="dark:text-white" />
                      <a href={viewURL} className="dark:text-gray-300">
                        {viewSite}
                      </a>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        )}
          </div>
        </div>
      
    </div>
  );
}

export default MobileProject;
