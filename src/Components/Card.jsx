import { LuExternalLink, LuGithub } from 'react-icons/lu';
import { useRef, useState } from 'react';

export const Card = (props) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-[15rem] w-[25rem] border-[1px] border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all flex flex-col justify-evenly py-4 items-center rounded-xl px-4 gap-4 hover:border-gray-400 dark:hover:border-gray-600 hover:scale-102 shadow-sm dark:shadow-gray-800/50"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, 
            rgba(59, 130, 246, 0.15), 
            transparent 40%)`,
        }}
      />
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
      <div className='flex w-[100%] justify-center gap-4 transition-all'> 
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
