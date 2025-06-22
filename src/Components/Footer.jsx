export const Footer = () => {
  return (
    <div className='h-[6vh] w-screen flex gap-1 justify-center items-center border-t border-black/20 dark:border-white/20 text-sm font-semibold text-zinc-700 px-4 py-4'>
      <p>
        © {new Date().getFullYear()}
      </p>
      <a href='https://github.com/PavanMeka09' target='_blank' rel='noopener noreferrer' className="font-light hover:text-blue-600 transition-all">
        Pavan Meka
      </a>
    </div>
  )
}