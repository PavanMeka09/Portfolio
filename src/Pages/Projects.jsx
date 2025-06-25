import { Card } from '../Components/Card'
import { FaArrowRight } from "react-icons/fa6";
import test from '../assets/test.png';
import upiqrgen from '../assets/upiqrgen.png'

export const Projects = () => {
  return (<>
    <div className='min-h-screen w-full py-16' id='projects'>
      <h1 className='text-2xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8'>Projects</h1>
      {/* Featured Project Card */}
      <div className='flex items-center justify-center mb-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40'>
        <Card 
          name="x00m" 
          desc='Web Application to Video Conference, Live collaborative sketch and coding labs' 
          stack={["nextJS", "TypeScript", "WebRTC", "PostGres", ".."]} 
          github='https://github.com/PavanMeka09/x00m'
          preview='https://x00m-web.vercel.app/'
          img={test} 
          featured
        />
      </div>
      {/* Other Project Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40'>
        <Card name="AuthUMS" desc='Auth Serivce for applications via LPU UMS' stack={["nodeJS", "Redis"]} github='https://github.com/PavanMeka09/AuthUMS' img={test}/>
        <Card name="OpenCluely" desc='Free version of Cluely' stack={["Typescript", "ElectronJS"]} github='https://github.com/PavanMeka09/OpenCluely' img={test}/>
        <Card name="UPIQrGen" desc='UPI Payment QR Code Generator' stack={["HTML", "tailwindCSS", "JS"]} github='https://github.com/PavanMeka09/upiqrgen' preview="https://pavanmeka09.github.io/upiqrgen/" img={upiqrgen}/>
      </div>
      <div className='flex justify-center mt-6 sm:mt-8'>
        <a className='dark:text-zinc-400 dark:hover:text-zinc-200 flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 hover:underline hover:gap-2 transition-all' href='https://github.com/PavanMeka09?tab=repositories' target='_blank'>view more <FaArrowRight /></a>
      </div>
    </div>
  </>
  )
}