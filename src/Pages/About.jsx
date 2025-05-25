import { motion } from 'framer-motion';
import { LuMail, LuLinkedin, LuGithub, LuFileUser} from "react-icons/lu";
import {Tooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export const About = () => {
  return (
    
    <div className='relative h-screen w-screen flex flex-col lg:flex-row justify-evenly items-center overflow-hidden'>
      
      <div className='relative z-10 text-center flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-3xl font-bold mb-2'>👋 Hi, I'm Pavan Meka</h1>
          <p className='text-lg'>I build things. Passionate about Programming and Problem solving.</p>
        </div>
      <div className='flex gap-8 z-10'>
        <a href="" className='p-4 rounded-xl hover:bg-zinc-300 transition-all dark:text-white dark:hover:bg-zinc-800' data-tooltip-id="mail-tooltip" data-tooltip-content="Send me an email">
          <LuMail />
        </a>
        <a href="" className='p-4 rounded-xl hover:bg-blue-300 transition-all dark:text-white dark:hover:bg-blue-600' data-tooltip-id="linkedin-tooltip" data-tooltip-content="Connect on LinkedIn">
          <LuLinkedin />
        </a>
        <a href="" className='p-4 rounded-xl hover:bg-zinc-300 transition-all dark:text-white dark:hover:bg-zinc-800' data-tooltip-id="github-tooltip" data-tooltip-content="Check out my GitHub">
          <LuGithub />
        </a>
        <a href="" className='p-4 rounded-xl hover:bg-zinc-300 transition-all dark:text-white dark:hover:bg-zinc-800' data-tooltip-id="resume-tooltip" data-tooltip-content="Resume">
          <LuFileUser />
        </a>
      </div>
      <Tooltip id="mail-tooltip" style={{ backgroundColor: '#1e293b', color: '#f1f5f9', borderRadius: '8px', padding: '8px 12px', fontSize: '14px' }} place="top" />
      <Tooltip id="linkedin-tooltip" style={{ backgroundColor: '#1e293b', color: '#f1f5f9', borderRadius: '8px', padding: '8px 12px', fontSize: '14px' }} place="top" />
      <Tooltip id="github-tooltip" style={{ backgroundColor: '#1e293b', color: '#f1f5f9', borderRadius: '8px', padding: '8px 12px', fontSize: '14px' }} place="top" />
      <Tooltip id="resume-tooltip" style={{ backgroundColor: '#1e293b', color: '#f1f5f9', borderRadius: '8px', padding: '8px 12px', fontSize: '14px' }} place="top" />
      </div>
      
    </div>
  )
}
