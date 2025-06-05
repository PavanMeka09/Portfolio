import { LuExternalLink, LuGithub } from 'react-icons/lu';

export const Card = (props) => {
  return (
    <div
      className="relative w-full max-w-[25rem] h-auto min-h-[15rem] border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 flex flex-col justify-evenly py-4 items-center rounded-xl px-4 gap-4 hover:border-gray-400 dark:hover:border-gray-600 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-800/50"
    >
      <div className='w-[100%]'>
        <h1 className='text-xl font-[500] text-gray-900 dark:text-gray-100'>{props.name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">{props.desc}</p>
      </div>
      <div className='flex gap-2 w-[100%] items-start text-[12px] cursor-default flex-wrap'>
        {props.stack.map((element, index) => (
          <p key={index} className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full'>
            {element}
          </p>
        ))}
      </div>
      <div className='flex w-[100%] justify-center gap-4 transition-all flex-wrap'> 
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
  )
}
