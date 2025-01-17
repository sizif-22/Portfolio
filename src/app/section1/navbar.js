"use client";
import {Links} from "../data.json";
import { Linkedin, Github, AtSign } from "lucide-react";
import { motion } from "framer-motion";

const SectionWithUnderline = () => {

  const getIcon = (iconName) => {
    const icons = {
      Linkedin: Linkedin,
      Github: Github,
      AtSign: AtSign,
    };
    const IconComponent = icons[iconName] || null;
    return IconComponent ? (
      <IconComponent className="w-6 h-6 transition-colors stroke-gray-400 group-hover:stroke-thirdColor delay-200" />
    ) : null;
  };

  return (
    <motion.div className="absolute left-[10%] top-10 w-[80%] h-[60px] border-[rgba(255,255,255,0.20)] border-2 rounded-[12px] md:px-10 px-3 flex justify-between items-center bg-primaryColor"
      initial={{top:50}}
      animate={{top:40}}
      transition={{duration:0.5 , delay:0.3}}
    >
      <p  className="text-4xl font-[Italiana] select-none">
      SiZiF
      </p>
      <div className="flex md:gap-4 gap-1 items-center justify-center">
        {Links.map((link, index) => (
          <div key={index} className="flex items-center md:gap-4 gap-1 group">
            {index !== 0 && <span className="text-gray-400 select-none">|</span>}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className="flex items-center gap-2 group p-2 rounded-[5px] relative"
            >
              {getIcon(link.icon)}
              <span className="group-hover:text-thirdColor hidden md:block links transition-all delay-200">
                {link.name}
              </span>
              <svg
                className="underline-svg absolute bottom-0 left-0 w-[100%] h-[5px] overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  className="transition-all duration-[0.3s] ease-in-out group-hover:stroke-thirdColor"
                  stroke="transparent"
                  strokeWidth={5}
                  strokeDasharray={1000}
                  strokeDashoffset={1000}
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWithUnderline;
