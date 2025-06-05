import { motion } from 'framer-motion';
import { LuMail, LuLinkedin, LuGithub} from "react-icons/lu";
import 'react-tooltip/dist/react-tooltip.css';
import { 
  SiTypescript, SiJavascript, SiPython, SiC, SiCplusplus, SiGo, 
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, 
  SiNodedotjs, SiExpress, 
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, 
  SiPrisma, 
  SiGit, SiGithub, 
  SiDocker, SiKubernetes, 
  SiLeetcode
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export const Hero = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-[10vh]'>
      <div className='relative z-10 text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 max-w-4xl'>
        <div className='flex flex-col justify-center items-center lg:items-start'>
          <span className='flex flex-row gap-2 flex-wrap justify-center lg:justify-start'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-extralight mb-2'>Pavan</h1>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-medium mb-2'>Meka</h1>
          </span>
          <p className='text-sm sm:text-base lg:text-lg text-center lg:text-left max-w-[90%] sm:max-w-none'>I build things. Passionate about Programming and Problem solving.</p>
        </div>
        <div className='flex gap-4 sm:gap-6 lg:gap-8 z-10 flex-wrap justify-center lg:justify-start'>
          <a href="mailto:mekapavan99@gmail.com" className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuMail size={20} className="text-black dark:text-white sm:w-[25px] sm:h-[25px]"/>
          </a>
          <a href="https://www.linkedin.com/in/pavanmeka99" target='_blank' className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuLinkedin size={20} className="text-[#0077B5] dark:text-[#0077B5] sm:w-[25px] sm:h-[25px]"/>
          </a>
          <a href="https://github.com/PavanMeka09" target='_blank' className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuGithub size={20} className="text-black dark:text-white sm:w-[25px] sm:h-[25px]"/>
          </a>
          <a href="https://leetcode.com/u/mekapavan99/" target='_blank' className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <SiLeetcode size={20} className="text-[#FFA116] dark:text-[#FFA116] sm:w-[25px] sm:h-[25px]"/>
          </a>
        </div>
      </div>
    </div>
  )
}
