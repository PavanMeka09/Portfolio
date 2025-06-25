import { LuExternalLink, LuGithub } from 'react-icons/lu';
import { TiPinOutline } from "react-icons/ti";

export const Card = (props) => {
  const featured = props.featured;
  return (
    <div
      className={`relative w-full ${featured ? 'max-w-4xl min-h-[22rem] flex-row gap-8 items-center' : 'max-w-[25rem] min-h-[15rem] flex-col gap-4 items-center'} h-auto border-[1px] border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 justify-evenly py-4 rounded-xl px-4 hover:border-gray-600 dark:hover:border-gray-600 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-800/50 flex ${featured ? 'md:flex-row' : 'flex-col'}`}
    >
      {featured && (
        <div className="absolute top-3 left-3 px-3 py-1 text-lg text-zinc-600 dark:text-zinc-300 font-light bg-transparent pointer-events-none select-none">
          <TiPinOutline />
        </div>
      )}
      {props.img && (
        <img src={props.img} alt={props.name + ' project'} className={`${featured ? 'w-80 h-56' : 'w-full h-40'} object-cover rounded-lg mb-2 shadow-md`} />
      )}
      <div className={`${featured ? 'flex-1 flex flex-col gap-4' : 'w-[100%] flex flex-col gap-4'}`}>
        <h1 className={`text-xl font-[500] text-gray-900 dark:text-gray-100 ${featured ? 'md:text-3xl' : ''}`}>{props.name}</h1>
        <p className={`text-sm text-gray-600 dark:text-gray-400 ${featured ? 'md:text-lg' : ''}`}>{props.desc}</p>
        <div className={`flex gap-2 ${featured ? 'flex-wrap' : ''} w-[100%] items-start text-[12px] cursor-default`}>
          {props.stack.map((element, index) => (
            <p key={index} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full'>
              {element}
            </p>
          ))}
        </div>
        <div className='flex w-[100%] justify-start gap-4 transition-all flex-wrap'> 
          {props.github && <a target='_blank' href={props.github} className='bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-pointer px-4 py-2 rounded flex gap-2 hover:-translate-y-1 transition-all items-center'>
            <LuGithub/>
            <p>Github</p>
          </a> 
          }
          {props.preview && <a target='_blank' href={props.preview} className='bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 cursor-pointer px-4 py-2 rounded flex gap-2 hover:-translate-y-1  transition-all items-center'>
            <LuExternalLink className='text-inherit'/>
            <p className='!text-white dark:!text-black'>Preview</p>
          </a>
          }
        </div>
      </div>
    </div>
  )
}
