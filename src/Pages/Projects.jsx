import { Card } from '../Components/Card'

export const Projects = () => {
  return (<>
    <div className='min-h-[500px] w-screen' id='projects'>
      <h1 className='text-2xl font-semibold text-center'>Things i have built</h1>
      <div className='flex justify-center items-center flex-wrap p-8 gap-16'>
      <Card name="ResumeGen" desc='Web Application to generate ATS Free AI Based Resumes' stack={["ReactJS", "TailwindCSS", "MotionJS", "FireBase", "FireBase"]} github='https://github.com/PavanMeka09/ResumeGen' preview='https://pmresumegen.vercel.app/'/>
      <Card name="WinMon - Windows Monitoring Tool" desc='Tool to control windows pc via telegram bot' stack={["Python", "TeleBot", "..."]} github='https://github.com/PavanMeka09/WinMon'/>
      <Card name="Tython" desc='AutoTyper made for Windows' stack={["Python"]} github='https://github.com/PavanMeka09/Tython'/>
      </div>
    </div>
  </>
  )
}