import { Card } from '../Components/Card'

export const Projects = () => {
  return (<>
    <div className='min-h-[500px] w-screen' id='projects'>
      <h1 className='text-2xl font-semibold text-center'>Things i have built</h1>
      <div className='flex justify-center items-center flex-wrap p-8 gap-16'>
      <Card name="ResumeGen" desc='Web Application to generate ATS friendly AI Based Resumes' stack={["ReactJS", "TailwindCSS", "MotionJS", "FireBase", "FireBase"]} github='https://github.com/PavanMeka09/ResumeGen' preview='https://pmresumegen.vercel.app/'/>
      <Card name="OpenCluely" desc='Free version of Cluely' stack={["Typescript", "ElectronJS"]} github='https://github.com/PavanMeka09/OpenCluely'/>
      <Card name="WinMon - Windows Monitoring Tool" desc='Tool to control windows pc via telegram bot' stack={["Python", "TeleBot", "..."]} github='https://github.com/PavanMeka09/WinMon'/>
      <Card name="Tython" desc='AutoTyper made for Windows' stack={["Python"]} github='https://github.com/PavanMeka09/Tython'/>
      <Card name="UPIQrGen" desc='UPI Payment QR Code Generator' stack={["HTML", "tailwindCSS", "JS"]} github='https://github.com/PavanMeka09/upiqrgen' preview="https://pavanmeka09.github.io/upiqrgen/"/>
      <Card name="Project0" desc='Modern Financial Management tool' stack={["Typescript", "NextJs", "tailwindCSS"]} github='https://github.com/PavanMeka09/upiqrgen' preview="https://pavanmeka09.github.io/upiqrgen/"/>
      </div>
    </div>
  </>
  )
}