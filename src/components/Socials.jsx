import React from "react";
import { FaLinkedinIn, FaGithub, FaShareAlt, FaTiktok, FaTwitter} from "react-icons/fa";
import { FloatButton } from "antd";

const Socials = () => {
  return (
    <div className="mt-[35px] grid lg:justify-start justify-center lg:items-start items-center">
      <FloatButton.Group trigger="click" type="default" icon={<FaShareAlt />}>
        <div className="gap-5 grid">
          <a href="https://www.linkedin.com/in/favour-samuel-1a218b244/" target="_blank">
            <FloatButton icon={<FaLinkedinIn />} className="dark:bg-white hover:opacity-75" />
          </a>
          <a href="https://github.com/Samuelnerat" target="_blank">
            <FloatButton icon={<FaGithub />} className="dark:bg-white hover:opacity-75" />
          </a>
          <a href="https://www.tiktok.com/@fave_tech_gurrl" target="_blank">
            <FloatButton icon={<FaTiktok />} className="dark:bg-white hover:opacity-75"/>
          </a>
          {/* <a href="#" target="_blank">
            <FloatButton icon={<FaTwitter />} className="dark:bg-white hover:opacity-75"/>
          </a> */}
        </div>
      </FloatButton.Group>
    </div>
  );
};

export default Socials;