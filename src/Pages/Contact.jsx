import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="min-h-screen w-full py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 bg-white dark:bg-zinc-950" id="contact">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-white">
          Contact
        </h1>
        <div className="flex flex-col gap-6 mb-12">
          <a href="mailto:pavanmeka09@gmail.com" className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-200 hover:underline">
            <FaEnvelope className="text-2xl text-zinc-400 dark:text-zinc-500" /> pavanmeka09@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/pavanmeka09/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-zinc-700 dark:text-zinc-200 hover:underline">
            <FaLinkedin className="text-2xl text-zinc-400 dark:text-zinc-500" /> linkedin.com/in/pavanmeka09
          </a>
        </div>
        <form className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-zinc-700 dark:text-zinc-200 font-medium">Name</label>
            <input type="text" id="name" name="name" className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-zinc-700 dark:text-zinc-200 font-medium">Email</label>
            <input type="email" id="email" name="email" className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-zinc-700 dark:text-zinc-200 font-medium">Message</label>
            <textarea id="message" name="message" rows={5} className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 transition resize-none" required />
          </div>
          <button type="submit" className="mt-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-semibold py-3 rounded-lg transition text-lg border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:text-white dark:hover:text-zinc-900">Send Message</button>
        </form>
      </div>
    </div>
  );
}; 