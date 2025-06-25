import black from '../assets/black.png'
import { ThemeSwitcher } from '../utils/ThemeSwitcher'
import { useRef, useState } from 'react';

export const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    // { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  const containerRef = useRef(null);
  const linkRefs = useRef([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  const handleMouseEnter = (idx) => {
    const link = linkRefs.current[idx];
    if (link && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setUnderline({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setUnderline((u) => ({ ...u, opacity: 0 }));
  };

  return (
    <div className='h-[8vh] w-screen bg-transparent flex justify-center items-center fixed top-0 z-[100]'>
      <div className='h-[100%] w-[100%] border-b-[1px] border-black/20 dark:border-white/20 flex justify-between items-center px-4 sm:px-16 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <a href="https://pavanmeka.vercel.app" className='h-[130%]'>
          <img src={black} className='h-[100%] rounded-full dark:filter dark:invert'/>
        </a>
        <div
          className='hidden sm:flex items-center gap-4 text-md font-light dark:text-white/90 relative'
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              ref={el => linkRefs.current[idx] = el}
              className='px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 relative z-10'
              onMouseEnter={() => handleMouseEnter(idx)}
            >
              {link.label}
            </a>
          ))}
          <div
            className='absolute bottom-1 left-0 h-[2px] bg-black dark:bg-white rounded transition-all duration-300 pointer-events-none'
            style={{
              width: underline.width,
              left: underline.left,
              opacity: underline.opacity,
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        </div>
        <div className='gap-10 sm:flex'>
          <ThemeSwitcher className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-md cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}
