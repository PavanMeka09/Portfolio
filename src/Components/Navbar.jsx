import Yellow from '../assets/Yellow.png'

export const Navbar = () => {
  return (
    <div className='h-[10vh] w-screen bg-transparent flex justify-center items-center fixed top-0 z-[100]'>
      <div className='h-[80%] w-[80%] border-[1px] rounded-xl flex justify-between items-center lg:px-16 px-4 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <a href="https://pavanmeka.vercel.app" className='h-[130%]'>
          <img src={Yellow} className='h-[100%] rounded-full'/>
        </a>
        <div className='hidden gap-10 sm:flex'>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
