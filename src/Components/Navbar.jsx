import black from '../assets/black.png'
import { ThemeSwitcher } from '../utils/ThemeSwitcher'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='h-[10vh] w-screen bg-transparent flex justify-center items-center fixed top-0 z-[100]'>
      <div className='h-[100%] w-[100%] border-b-[1px] border-black/20 dark:border-white/20 flex justify-between items-center px-4 sm:px-16 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <a href="https://pavanmeka.vercel.app" className='h-[130%]'>
          <img src={black} className='h-[100%] rounded-full dark:filter dark:invert'/>
        </a>
        <div className='hidden gap-10 sm:flex'>
          <ThemeSwitcher className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-md cursor-pointer"/>
        </div>
        <button 
          className='sm:hidden p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-md cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed top-[10vh] left-0 w-full bg-white dark:bg-zinc-950 border-b border-black/20 dark:border-white/20 sm:hidden'>
          <div className='flex flex-col items-center py-4'>
            <ThemeSwitcher className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-md cursor-pointer"/>
          </div>
        </div>
      )}
    </div>
  )
}
