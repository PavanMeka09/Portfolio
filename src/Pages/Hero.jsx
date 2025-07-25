import { LuGithub} from "react-icons/lu";
import 'react-tooltip/dist/react-tooltip.css';
import { SiLeetcode } from "react-icons/si";
import { RiScrollToBottomLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (  
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-[10vh]'>
      <div className='relative z-10 flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 max-w-4xl'>
        <div className='flex flex-col justify-center items-center'>
          <span className='flex flex-row gap-2 flex-wrap justify-center items-center'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-extralight mb-2 text-center'>Pavan</h1>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-medium mb-2 text-center'>Meka</h1>
          </span>
          <TypeAnimation
            sequence={[
              'Web Dev • Cloud • DevOps • AI',
              500
            ]}
            wrapper="span"
            speed={25}
            className="text-gray-900 dark:text-gray-100"
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          <a
            // href="/src/assets/resume.pdf"
            download
            className="cursor-not-allowed opacity-50 mt-4 mb-2 inline-block px-6 py-2 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium shadow-md hover:shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 border border-transparent hover:border-zinc-700 dark:hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 text-sm sm:text-base"
          >
            Download Resume
          </a>
          <div className='flex gap-4 sm:gap-6 lg:gap-8 z-10 flex-wrap justify-center mt-4'>
            <a href="https://github.com/PavanMeka09" target='_blank' className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
              <LuGithub size={20} className="text-black dark:text-white sm:w-[25px] sm:h-[25px]"/>
            </a>
            <a href="https://leetcode.com/u/mekapavan99/" target='_blank' className='p-3 sm:p-4 rounded-xl hover:bg-zinc-100 transition-all dark:text-white dark:hover:bg-zinc-800'>
              <SiLeetcode size={20} className="text-[#FFA116] dark:text-[#FFA116] sm:w-[25px] sm:h-[25px]"/>
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center z-20">
        <RiScrollToBottomLine  className="text-zinc-400 dark:text-zinc-600 text-2xl  animate-bounce-slow" />
      </div>
    </div>
  )
}
