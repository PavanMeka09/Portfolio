import { Card } from '../Components/Card'
import { FaArrowRight } from "react-icons/fa6";

export const Projects = () => {
  return (<>
    <div className='min-h-[500px] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12' id='projects'>
      <h1 className='text-2xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8'>Things i have built</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto'>
        {/* <Card name="ResumeGen" desc='Web Application to generate ATS friendly AI Based Resumes' stack={["ReactJS", "TailwindCSS", "MotionJS", "FireBase", "FireBase"]} github='https://github.com/PavanMeka09/ResumeGen' preview='https://pmresumegen.vercel.app/'/> */}
        <Card name="OpenCluely" desc='Free version of Cluely' stack={["Typescript", "ElectronJS"]} github='https://github.com/PavanMeka09/OpenCluely'/>
        <Card name="WinMon - Windows Monitoring Tool" desc='Tool to control windows pc via telegram bot' stack={["Python", "TeleBot", "..."]} github='https://github.com/PavanMeka09/WinMon'/>
        <Card name="Tython" desc='AutoTyper made for Windows' stack={["Python"]} github='https://github.com/PavanMeka09/Tython'/>
        <Card name="UPIQrGen" desc='UPI Payment QR Code Generator' stack={["HTML", "tailwindCSS", "JS"]} github='https://github.com/PavanMeka09/upiqrgen' preview="https://pavanmeka09.github.io/upiqrgen/"/>
      </div>
      <div className='flex justify-center mt-6 sm:mt-8'>
        <a className='dark:text-zinc-400 dark:hover:text-zinc-200 flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 hover:underline hover:gap-2 transition-all' href='https://github.com/PavanMeka09?tab=repositories' target='_blank'>view more <FaArrowRight /></a>
      </div>
    </div>
  </>
  )
}