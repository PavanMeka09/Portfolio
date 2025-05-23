import { ExternalLink,Github } from 'lucide-react';

export const Card = (props) => {
  return (
    <div className="h-[15rem] w-[25rem] border-[1px] border-black/10 transition-all flex flex-col justify-evenly py-4 items-center rounded-xl px-4 gap-4 hover:border-black hover:scale-102">
        <div className='w-[100%]'>
          <h1 className='text-xl font-[500]'>{props.name}</h1>
          <p className="text-sm text-black/50">{props.desc}</p>
        </div>
        <div className='flex gap-2 w-[100%] items-start text-[12px] cursor-default flex-wrap'>
          {props.stack.map((element, index) => (
            <p key={index} className='px-3 py-1 bg-black/10 rounded-full'>
              {element}
            </p>
          ))}
        </div>
        <div className='flex w-[100%] justify-center gap-4 transition-all'> 
          {props.github && <a target='_blank' href={props.github} className='bg-black/10 cursor-pointer px-4 py-2 rounded flex gap-2 hover:-translate-y-1 transition-all'>
            <Github className='dark:text-white'/>
            <p>Github</p>
          </a>
          }
          {props.preview && <a target='_blank' href={props.preview} className='bg-black text-white dark:text-black dark:bg-zinc-300 cursor-pointer px-4 py-2 rounded flex gap-2 hover:-translate-y-1 transition-all'>
            <ExternalLink />
            <p>Preview</p>
          </a>
          }
        </div>
      </div>
  )
}
