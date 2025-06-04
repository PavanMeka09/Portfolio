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
    
    <div className='relative h-screen w-screen flex flex-col lg:flex-row justify-evenly items-center overflow-hidden'>
      <div className='relative z-10 text-center flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start'>
          <span className='flex flex-row gap-2'>
            <h1 className='text-6xl font-extralight mb-2'>Pavan</h1>
            <h1 className='text-6xl font-medium mb-2'>Meka</h1>
          </span>
          <p className='text-lg'>I build things. Passionate about Programming and Problem solving.</p>
        </div>
        <div className='flex gap-8 z-10'>
          <a href="mailto:mekapavan99@gmail.com" className='p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuMail size={25} className="text-black dark:text-white"/>
          </a>
          <a href="https://www.linkedin.com/in/pavanmeka99" target='_blank' className='p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuLinkedin size={25} className="text-[#0077B5] dark:text-[#0077B5]"/>
          </a>
          <a href="https://github.com/PavanMeka09" target='_blank' className='p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <LuGithub size={25} className="text-black dark:text-white"/>
          </a>
          <a href="https://leetcode.com/u/mekapavan99/" target='_blank' className='p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
            <SiLeetcode size={25} className="text-[#FFA116] dark:text-[#FFA116]"/>
          </a>
        </div>
      </div>
    </div>
  )
}
