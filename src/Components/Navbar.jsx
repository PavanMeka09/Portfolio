import black from '../assets/black.png'
import { ThemeSwitcher } from '../utils/ThemeSwitcher'

export const Navbar = () => {
  return (
    <div className='h-[10vh] w-screen bg-transparent flex justify-center items-center fixed top-0 z-[100]'>
      <div className='h-[100%] w-[100%] border-b-[1px] border-black/20 dark:border-white/20 flex justify-between items-center px-16 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <a href="https://pavanmeka.vercel.app" className='h-[130%]'>
          <img src={black} className='h-[100%] rounded-full dark:filter dark:invert'/>
        </a>
        <div className='hidden gap-10 sm:flex'>
          <ThemeSwitcher className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-md cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}
