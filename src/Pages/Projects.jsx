import { Card } from '../test/Card'

export const Projects = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-wrap p-6 gap-16' id='projects'>
      <Card name="ResumeGen" desc='Web Application to generate ATS Free AI Based Resumes' stack={["ReactJS", "TailwindCSS", "MotionJS", "FireBase", "FireBase"]} github='https://github.com/PavanMeka09/ResumeGen' preview='https://pmresumegen.vercel.app/'/>
      <Card name="WinMon - Windows Monitoring Tool" desc='Tool to control windows pc via telegram bot' stack={["Python", "TeleBot", "..."]} github='https://github.com/PavanMeka09/WinMon'/>
      <Card name="Tython" desc='AutoTyper made for Windows' stack={["Python"]} github='https://github.com/PavanMeka09/Tython'/>
    </div>
  )
}