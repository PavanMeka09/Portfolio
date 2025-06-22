export const Footer = () => {
  return (
    <div className='h-[6vh] w-screen flex gap-2 justify-center items-center border-t border-black/20 dark:border-white/20 text-sm text-zinc-700 px-4 py-4'>
      <p>
        © {new Date().getFullYear()}
      </p>
      <p>
        Pavan Meka
      </p>
    </div>
  )
}